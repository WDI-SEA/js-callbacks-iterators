// BONUS ONLY: Look up docs to read about reduce, which takes 
//an array and distills it into a single value.

var numbers = [1, 56, 2, 4, 1, 99, 3, 5];


// Your code here!

// Write something that takes the above array and returns the product of 
// all the number via multiplication


const multiplier = (accumulator, currentValue) => accumulator * currentValue;


console.log(numbers.reduce(multiplier));


//rome solution

let multiply = function(total, number) {
    return total * number;
}
let multiplication = numbers.reduce(multiply);
console.log(multiplication);