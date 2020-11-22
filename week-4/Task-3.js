class Item
{
  constructor(name, discount)
  {
  	this.name=name;
    this.discount=discount;
    this.calculatePrice=function()
    {
    	return this.getPrice()-(this.discount/100)*this.getPrice();
    }
  }
   
  getPrice()
  {
  	let price=1000;
  	return price;
  }
}



item=new Item("Item",10);
console.log(item.getPrice());
console.log(item.calculatePrice());
