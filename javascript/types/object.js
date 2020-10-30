/* 

A JS Object is a variable  that contains a collection of named values (properties or methods)

=> to create an object : let nameObj = {};

what is stored inside the {}, can be pairs of name/values { name : value , }=> coma separated

and methods (function stored inside an object)  => { name : function(){ return ... }, 

exemple :

let person = {
    name : "Ali",
    lastname :" Baba",
    hello : function(){
        return ("hello " + this.name); => this. refers to the "owner" of the variable, here person's name
    }
}

to access a property : objectName.propertyname;
ex => console.log(person.name)    //output "Ali"
*/
