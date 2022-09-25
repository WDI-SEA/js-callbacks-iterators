// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

let numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication


//total is the value to be returned
//total begins at arr[0]
const product = numbers.reduce((total, current) => {
  //return whatever value you want to create
  //with total and current
  //whatever you return will be the NEW current
  return (total * current)
})

console.log(product)
//if you want to start with a different total (say, 42), add another argument to .reduce