class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.credits = [];
    this.debits = [];
  }

  credit(deposit) {
    this.balance += deposit;
    this.credits.push(deposit);
  }
  
  debit(withdrawl) {
    this.balance -= withdrawl;
    this.debits.push(withdrawl);
  }

  checkBalance() {
    if(this.balance < 0) {
      return `Your account balance is -$${Math.abs(this.balance)}`
    }
    return `Your account balance is $${this.balance}`
  }

  getTransactions(){
    return {
      credits: this.credits.slice(0),
      debits: this.debits.slice(0)
    };
  }
}


class CheckingAccount extends BankAccount {
  constructor(balance) {
    super(balance);
  }

  debit(withdrawl) {
    if(this.balance - withdrawl < 50) {
      if(this.balance - withdrawl < 0) {
        return `debit denied: insufficient funds`;
      }
      this.balance -= 40;
    }
    return super.debit(withdrawl);
  }
}


class SavingsAccount extends BankAccount {
  static withdrawlLimit = 10;

  constructor(balance) {
    super(balance);
    this.linkedAcct = null;
    this.timesWithdrawn = 0;
  }

  debit(withdrawl) {
    if(this.timesWithdrawn < SavingsAccount.withdrawlLimit) {
      this.timesWithdrawn++;
    } else {
      super.debit(50);
    }
    return super.debit(withdrawl);
  }

  linkToChecking(acct) {
    this.linkedAcct = acct;
  }

  transfer(amount) {
    if(!this.linkedAcct) {
      return `Transfer denied: no linked checking account`
    }
    if(this.timesWithdrawn >= SavingsAccount.withdrawlLimit) {
      super.debit(50);
    }
    this.linkedAcct.credit(amount);
    super.debit(amount);
  }
}

let account = new SavingsAccount(100);
console.log(account.transfer(50));
console.log(account.checkBalance());
account.credit(50);
console.log(account.checkBalance());
account.debit(200);
console.log(account.checkBalance());
account.debit(110);
console.log(account.checkBalance());
account.debit(1);
account.debit(1);
account.debit(1);

account.linkToChecking(new CheckingAccount(42))
console.log(account.checkBalance());

account.debit(1);
account.debit(1);
account.debit(1);
account.debit(1);
account.debit(1);

account.debit(20);
console.log(account.getTransactions());

account.transfer(50);
console.log(account.checkBalance());
console.log(account)
