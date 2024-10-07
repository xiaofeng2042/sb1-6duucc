let balance = 0;
const transactions = [];

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function addTransaction(description, amount, type) {
    const transaction = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        type
    };

    transactions.push(transaction);

    if (type === 'income') {
        balance += transaction.amount;
    } else {
        balance -= transaction.amount;
    }

    updateBalance();
    updateTransactionList();
    saveData();
}

function updateTransactionList() {
    const list = document.getElementById('transaction-list');
    list.innerHTML = '';

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.className = transaction.type;
        li.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)} (${transaction.type})`;
        list.appendChild(li);
    });
}

function saveData() {
    localStorage.setItem('balance', balance.toString());
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function loadData() {
    const savedBalance = localStorage.getItem('balance');
    const savedTransactions = localStorage.getItem('transactions');

    if (savedBalance) {
        balance = parseFloat(savedBalance);
        updateBalance();
    }

    if (savedTransactions) {
        transactions.push(...JSON.parse(savedTransactions));
        updateTransactionList();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transaction-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const description = document.getElementById('description').value;
            const amount = document.getElementById('amount').value;
            const type = document.getElementById('type').value;

            addTransaction(description, amount, type);

            this.reset();
        });
    }

    // Load saved data when the page loads
    loadData();
});