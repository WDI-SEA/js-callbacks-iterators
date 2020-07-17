// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication

//If no initial value is provided in .reduce() the accumulator is the first value in the array and the currentValue is equal to the second
//Example Syntax(w/o Initial Value): Array.reduce(( accumulator, currentValue) => accumulator * currentValue)
//Example Syntax(w/ Initial Value): Array.reduce(( accumulator, currentValue) => accumulator * currentValue, initialValue)
console.log(numbers.reduce((a,b) => a * b));
