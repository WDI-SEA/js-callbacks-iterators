var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here

//          * * N O T E S * *

// strings are in "quotations"
// {this would be an object bc its in curly braces}
// [this is an array typcially made up of numbers, like, this, .,]

//code example below now
const allStrings = misc.filter(element => {
    // console.log(typeof element);

    // let whatIsThis = typeof element;
    // console.log(whatIsThis);

    if (typeof element === 'string') {
        return element;
    } else if (Array.isArray(element)) {
        element.forEach(el => {
            if (typeof el === 'string') {
                return el;
            }
        }):
    // if (typeof element === 'string')
    }
});

console.log(allStrings);
