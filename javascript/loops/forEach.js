/* becode "javascript forEach" documentation
 *
 * coded by cristina
 * 30 oct 2020
 *
 */

// forEach is an Array method that we can use to execute a function on each element in an array
// It can only be used on Arrays, Maps, and Sets

// Important: When using forEach, we have to specify a callback function as a parameter.

// Let's take an example:
var pets = ['cat', 'dog', 'fish'];

pets.forEach(element => {
	console.log(element);
});
// here, all there is between paranthesis "element => { console.log(element); }" is a callback function

// Instead of "element", we can use the name we want, as long as we understand that this callback function will be executed on each element in the array

// When the code is executed, the output will be:
// cat
// dog
// fish

//****************************************************************************

// Another way to do it is like that:
pets.forEach(showPetsName);

function showPetsName(item, index) {
	console.log(index + ":" + item); // where item is the value of each element in the array & index is each position of the array
}
// When the code is executed, the output will be:
// 0: cat
// 1: dog
// 2: fish

//****************************************************************************

// Let's take another example: Calculate and print the sum of all elements (values) in the array
var numbers = [12, 4, 1, 73];
var sum = 0; // declaration of a variable for putting the result in

numbers.forEach(number => {
	sum += number;
});
// So, the statement "sum += number;" will be executed 4 times and each time, a new number will be added to the sum (sum will be updated)

console.log("sum = " + sum);
// sum = 90