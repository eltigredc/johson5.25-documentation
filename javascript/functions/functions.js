/* becode "javascript functions" documentation
 *
 * coded by cristina
 * 30 oct 2020
 *
 */

// A function is a subprogram designed to perform a particular task
// Functions are objects

// Functions ALWAYS return a value. In JavaScript, if no return value is specified, the function will return "undefined"

// To create a function declaration you use the "function" keyword followed by the name_of_the_function
function myfunction() {
	return "hello";
}

// Values can be passed into functions and used within the function
function multiplication(nb1, nb2) {
	return nb1 * nb2;
}

// Functions are executed when they are called. This is known as "invoking a function"
myfunction(); // the result will be "hello"
console.log(myfunction()); // we will have "hello" in the console

multiplication(3, 4); // the result will be 12
console.log(myfunction()); // we will have 12 in the console

// We can declare a function directly in a variable, like this:
let name = function(parameters) {
  // statements
}