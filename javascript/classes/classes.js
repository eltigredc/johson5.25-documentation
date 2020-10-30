/*

Classes are like templates of JS Objects ( I imagine a receipe of a cake, and the actual object would be the cake)

*To create a class : use the class keyword, followed by the className 

=> exemple : class PlassName : { }


*Inside, you first declare a constructor() method that set initial values that will be initialized when an object
is going to be created. If not defined, JS will automatically add an empty constructor

=> exemple : class Person :{
    constructor( name, age){
        this.name = name;     => this. keyword refers to  the new instance created
        this.age = age
    }
}

* Then you can if you want, declare methods inside the class that are going to become properties of the instances
(methods are functions declared as object properties)

=> exemple : class Person :{
    constructor(name, age){
        this.name = name;     => this. keyword refers to  the new instance created
        this.age = age
    }

    methodName(){                          => that is how you declare a function inside an object
        return ('you are' + this.name) => it can return anything you want, works like a normal function
    }
}


* From the class created, you can instanciate, or create real object like this:

let juliette = new Person('juliette', 28);
*/