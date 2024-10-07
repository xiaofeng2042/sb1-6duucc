import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Balance from '../components/Balance';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  userId: string;
}

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) {
      const userId = session.user.id;
      const savedBalance = localStorage.getItem(`balance_${userId}`);
      const savedTransactions = localStorage.getItem(`transactions_${userId}`);

      if (savedBalance) {
        setBalance(parseFloat(savedBalance));
      }

      if (savedTransactions) {
        setTransactions(JSON.parse(savedTransactions));
      }
    }
  }, [session]);

  useEffect(() => {
    if (session?.user?.id) {
      const userId = session.user.id;
      localStorage.setItem(`balance_${userId}`, balance.toString());
      localStorage.setItem(`transactions_${userId}`, JSON.stringify(transactions));
    }
  }, [balance, transactions, session]);

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'userId'>) => {
    if (session?.user?.id) {
      const newTransaction = { ...transaction, id: Date.now(), userId: session.user.id };
      setTransactions([...transactions, newTransaction]);
      setBalance(prevBalance => 
        transaction.type === 'income' 
          ? prevBalance + transaction.amount 
          : prevBalance - transaction.amount
      );
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Simple Accounting</h1>
          <p className="text-center mb-6">Welcome, {session.user.name}!</p>
          <Balance balance={balance} />
          <TransactionForm onAddTransaction={addTransaction} />
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
}