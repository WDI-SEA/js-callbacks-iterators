// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

let numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication


const product = numbers.reduce((num, current) => {
  return num * current
})

console.log(product)