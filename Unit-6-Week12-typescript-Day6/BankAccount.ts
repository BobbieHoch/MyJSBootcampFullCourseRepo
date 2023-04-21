class BankAccount{
    balance: number;
    interestRate: number;

    constructor(balance: number, interestRate: number) {
        this.balance = balance;
        this.interestRate = interestRate; 
    }

    addInterest() : void {
        this.balance += this.balance * this.interestRate;
    }
}

export {BankAccount}