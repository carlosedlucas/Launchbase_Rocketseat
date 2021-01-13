const users = {
  name: 'Mariana',
  transactions: [],
  balance: 0,
};

function createTransaction(type, value) {
  if (type == 'credit') {
    users.transactions.push(type, value);
    users.balance += value;
  } else if (type == 'debit') {
    users.transactions.push(type, value);
    users.balance -= value;
  } else {
    return console.log('Tipo inválido de requisição');
  }
}

createTransaction('debit', 50.5);
createTransaction('credit', 50);
createTransaction('credit', 150);
console.log(users);
