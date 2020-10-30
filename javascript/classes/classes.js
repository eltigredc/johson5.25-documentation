/* becode "javascript classes" documentation
 *
 * coded by cristina
 * 30 oct 2020
 *
 */

 // A JavaScript class is a kind of fonction.
 // JavaScript classes are templates for JavaScript objects

 // Class Syntax
class ClassName {
	constructor() { /*...*/ }

	method_1() { /*...*/ }
	method_2() { /*...*/ }
	method_3() { /*...*/ }
}

// We use the keyword "class" to create a class
// Class name is a camelcase word, starting with an uppercase
class  Animal {}
class  SpaceShip {}


// It is recommended to always add a constructor() method
class Car {
  	constructor(name, year) {
	    this.name = name;
	    this.year = year;
  	}
}

// If you don't define a constructor method, JavaScript will add an empty constructor method

// After the declaration of the class, we can use it
// The constructor method is called automatically when a new object is created
// The constructor method is used to initialize object properties
let myCar1 = new Car("Ford", 2004);
let myCar2 = new Car("Audi", 2010);

// myCar1 & myCar2 are 2 objects (we call them instances of the class Car)

// so, if we print the 2 objects we declared, we get that:
console.log(myCar1);
/*{
	name: "Ford",
	year: 2004
}*/

console.log(myCar2);
/*{
	name: "Audi",
	year: 2010
}*/


// We can also declare some methods (functions) inside the class, like this:
class Car {
  	constructor(name, year) {
	    this.name = name;
	    this.year = year;
  	}

	age() {
	    let date = new Date();
	    return date.getFullYear() - this.year;
    } 
}

// So now we can use age method:

console.log(myCar1.age);
// 16

console.log(myCar2.age);
// 10


// We can even use the age method, or its properties to interact with the DOM
document.getElementById("target").innerHTML = "This car is " + myCar1.age() + " years old.";