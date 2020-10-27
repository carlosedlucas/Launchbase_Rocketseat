const users = {
  name: 'Mariana',
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  if (transaction.type == 'credit') {
    users.transactions.push(transaction);
    users.balance += transaction.value;
  } else if (transaction.type == 'debit') {
    users.transactions.push(transaction);
    users.balance -= transaction.value;
  } else {
    console.log('Tipo inválido de transação');
  }
}

function getHigherTransactionByType(type) {
  let maiorNum = { type: '', value: 0 };
  if (type == 'credit') {
    for (let num of users.transactions) {
      if (num.type == 'credit' && num.value > maiorNum.value) {
        maiorNum = num;
      }
    }
  } else {
    for (let num of users.transactions) {
      if (num.type == 'debit' && num.value > maiorNum.value) {
        maiorNum = num;
      }
    }
  }
  return maiorNum;
}

function getAverageTransactionValue() {
  let sum = 0;
  for (num of users.transactions) {
    sum += num.value;
  }
  let result = sum / users.transactions.length;
  return console.log(result);
}

function getTransactionsCount() {
  let resultCredit = 0;
  let resultDebit = 0;
  for (transaction of users.transactions) {
    if (transaction.type == 'credit') {
      resultCredit++;
    } else {
      resultDebit++;
    }
  }
  return console.log(`{ credit: ${resultCredit}, debit:${resultDebit} }`);
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

console.log(users.balance); // 60
console.log(getHigherTransactionByType('credit')); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')); // { type: 'debit', value: 80 }
getAverageTransactionValue(); // 70
getTransactionsCount(); // { credit: 2, debit: 2 }
