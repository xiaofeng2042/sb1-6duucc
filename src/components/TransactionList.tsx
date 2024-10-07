interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Transaction History</h3>
      <ul className="space-y-3">
        {transactions.map((transaction) => (
          <li 
            key={transaction.id} 
            className={`p-3 rounded-lg shadow ${
              transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{transaction.description}</span>
              <span className={`font-bold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </span>
            </div>
            <span className="text-xs text-gray-500">{transaction.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}