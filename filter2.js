var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here
/*
const noString = misc.filter(element => {
    if (typeof element !== "string")
    {
        return element;
    }
} );

console.log(noString);
*/
let result = [];

const allString = misc.filter(element => 
{
    if (typeof element === "string")
    {
        result.push(element);
    }
    else if (Array.isArray(element)) 
    {
        getArrayString(element);
    }
} );

function getArrayString(array)
{
    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i] === "string")
        {
            result.push(array[i])
        } 
    }
}

console.log(result);