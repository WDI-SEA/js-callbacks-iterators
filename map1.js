let mneumonics = ['My Very Excellent Mother Just Sent Me Nine Pizzas', 'Please Excuse My Dear Aunt Sally', 'Every Good Boy Does Fine'];

// Write some code using map that takes the above array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']

// Your code here!

let meme = mneumonics.map((arr) => arr.split(' '));
console.log(meme);



