class PaymentMethod
{
	getAmount()
  {
  return "Your amount in the account is: ";
  }
}

class CashMethod extends PaymentMethod
{
	constructor()
  {
    super();
  	var amount=0;
 }
 addToAmount(another_amount)
   {
  	amount+=another_amount;
   }
   reduceFromAcmount(another_amount)
   {
  	amount-=another_amount;
   } 
 getAmount()
   {
    return `${super.getAmount} ${amount}`;
   } 
}

class CreditMethod extends PaymentMethod
{
	constructor()
  {
    super();
  	var amount=0;
 }
 addToAmount(another_amount)
   {
  	amount+=0.9*another_amount;
   }
   reduceFromAcmount(another_amount)
   {
  	amount-=another_amount;
   }
 getAmount()
   {
    return `${super.getAmount} ${amount}`;
   }  
}

const cashAccount = new CashMethod();
		cashAccount.getAmount(); // returns “Your amount in the account is: 0”
		cashAccount.addToAmount(100); // returns cashAccount instance (useful for method chaining)
		cashAccount.addToAmount(20).addToAmount(30).reduceFromAmount(10); // returns cashAccount instance (useful for method chaining)
		cashAccount.getAmount(); // returns “Your amount in the account is: 140”

		const creditAccount = new CreditMethod();
		creditAccount.addToAmount(100); // returns creditAccount instance (useful for method chaining)
		creditAccount.getAmount(); // returns “Your amount in the account is: 90”;
