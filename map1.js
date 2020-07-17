var mneumonics = ['My Very Excellent Mother Just Sent Me Nine Pizzas', 'Please Excuse My Dear Aunt Sally', 'Every Good Boy Does Fine'];

// Write some code using map that takes the above array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']

// Your code here!

function splitArray(array1) {
    newArray = []
    var newItem = array1.split(" ");
    newArray.push(newItem);
    return newArray;

}

var objMne = mneumonics.map(splitArray);

console.log(objMne);
