// Class documentation
// JavaScript Classes are templates for JavaScript Objects.

// Example of a class:

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Method
    speak() {
        console.log('Hello there');
    }
}

// See example; in the class you write everything about what it means to be a person. 
// A person has a name, age, etc. (variables) and a person can do stuff like eating, talking, etc. (methods).

// The class itself doesn't influence the code, but you can use it as a 'framework' to create objects (new persons in the example).
// Using the class to create a new object:
// Write 'new' + the name of the class with capital and the parameters between the brackets (same no of parameters as the class constructor has)

const john = new Person('John','Doe', 18);

// If you want to use a method -> make John speak write:

john.speak();

// You can copy the methods of a class into another class
// Child inherits the methods of the class Person and has it own method(play):

class Child extends Person {
    constructor(firstName, lastName, age, toy) {
        super(firstName);
        super(lastName);
        super(age);
        this.toy = toy;
    }
    play() {
        //insert plays with toy function;
    }
}

// Getters and setters allow you to get and set properties via methods.

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.language = 'NL';
    }
    // Method
    speak() {
        console.log('Hello there');
    }
    //Getter
    get lang() {
        return this.language;
    }
    //Setter
    set lang(value) {
        this.language = value;
    }
}

//Default language is 'NL' , but you can set an object property using a setter:

person.lang = "en";