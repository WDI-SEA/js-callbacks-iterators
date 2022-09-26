let numbers = [1, 56, 2, 4, 1, 99, 3, 5];
// Your code here!
// Write something that takes the above array and returns the product of all the numbers
// via multiplication
const multiple = numbers.reduce((total, current) => {
    return total * current
  }, 1)
  console.log(multiple)