//forEach() documentation

//The forEach() is a method specifically for arrays
//It executes a provided callback function once for each array element.

//Example 1:

const arr = ['a', 'b', 'c'];

arr.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

//You can decide what you call the currentValue/element in the forEach loop (in the example: 'element')
// Often the singular word is used as a currentValue. For example: array name = bubbles, currentValue = bubble:

const bubbles = [1,2,3,4];

bubbles.forEach(function showMyBubbles(bubble){
    console.log(bubble);
})

//output: 1
//output: 2
//output: 3
//output: 4

//There is no way to stop or break a forEach() loop other than by throwing an exception. 
//If you need such behavior, the forEach() method is the wrong tool.

//forEach does not wait for promises and thus expects a synchronous function.

// Example with function declared outside of loop:

const bubbles = [1,2,3,4];
function showMyBubbles(x){
    console.log(x);
}

bubbles.forEach(showMyBubbles);

//output: 1
//output: 2
//output: 3
//output: 4
