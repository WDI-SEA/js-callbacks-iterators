// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication
function multiply(a,b) {
    return a * b;
}
var product = numbers.reduce (multiply, 1);
console.log(product);

