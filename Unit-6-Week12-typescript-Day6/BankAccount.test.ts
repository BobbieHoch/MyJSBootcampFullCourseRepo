import { BankAccount } from "./BankAccount";

describe('BankAccountTests', () => {
    test('add interest, balance 100 and interest is 10%', () => {
        //arrange
        //instantiate your objects, set up any dependencies
        let testBankAccount = new BankAccount(100, .1);

        //act
        //What should the balance be in the beginning?
        expect(testBankAccount.balance).toBe(100);

        //call the function
        testBankAccount.addInterest();

        //did it work?
        expect(testBankAccount.balance).toBe(110);
    })
});