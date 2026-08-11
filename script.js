class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push(new Transaction('deposit', amount));
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    }
    if (amount <= 0) {
      return "Deposit amount must be greater than zero."
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push(new Transaction('withdraw', amount));
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    }
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount."
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    return `Deposits: ${this.transactions
      .filter(txn => txn.type == 'deposit')
      .map(txn => txn.amount)
      .join(',')}`;
  }

  listAllWithdrawals() {
    return `Withdrawals: ${this.transactions
      .filter(txn => txn.type == 'withdraw')
      .map(txn => txn.amount)
      .join(',')}`;
  }
}

class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }
}

let myAccount = new BankAccount();
myAccount.deposit(10);
myAccount.deposit(35);
myAccount.deposit(900);
myAccount.withdraw(5);
myAccount.withdraw(51);
myAccount.listAllDeposits();
