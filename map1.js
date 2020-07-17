var mneumonics = ['My Very Excellent Mother Just Sent Me Nine Pizzas', 'Please Excuse My Dear Aunt Sally', 'Every Good Boy Does Fine'];

// Write some code using map that takes the above array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']

// Your code here!

var res = mneumonics.split(' ', ' ');

//or this, I am not too sure
mneumonics.map(function(split){

});
console.log(' ', ' ');

//Solution

/* 
const results = mneumonics.map(sentence => {
    let splitSentence = sentence.split(' ');

    return splitSentence;
});
 
console.log(results)