interface BalanceProps {
  balance: number;
}

export default function Balance({ balance }: BalanceProps) {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-white">Current Balance</h2>
      <p className="text-4xl font-bold text-white">${balance.toFixed(2)}</p>
    </div>
  );
}