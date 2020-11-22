class Person
{
	constructor(name)
  {
  	this.name=name;
    this.planet="Земя";
  }
  sayHello ()
	{
	console.log(`Здравей ${this.name} от планетата ${this.planet}`);
	}
}


let p1=new Person("Чък Норис");
let p2=new Person("Димитър Иванов");
let p3=new Person("Ивайло Петров");

p1.sayHello();
p2.sayHello();
p3.sayHello();
