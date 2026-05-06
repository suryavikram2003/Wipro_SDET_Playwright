class BankAccount
{
    #balance=0;

    deposit(amount)
    {
        if(amount>0)
        {
            this.#balance+=amount;
            console.log(`Depsosited: ${amount}. Current Balance: ${this.#balance}`);
        }
        else{
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount)
    {
        if(amount>0 && amount<=this.#balance)
        {
            this.#balance-=amount;
            console.log(`Withdrawn: ${amount}. Current Balance: ${this.#balance}`);
        }
        else
        {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }

    getBalance()
    {
        return this.#balance;
    }
}
const VikramAccount = new BankAccount();
VikramAccount.deposit(1000);
VikramAccount.withdraw(500);
console.log(`Final Balance: ${VikramAccount.getBalance()}`);

const SuryaAccount = new BankAccount();
SuryaAccount.deposit(2000);
SuryaAccount.withdraw(1500);
console.log(`Final Balance: ${SuryaAccount.getBalance()}`);