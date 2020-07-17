var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here

function filterMisc(value) {
    for (let i = 0; value > i; i++) {
        if (value = String) {
            return value;
        }
    }
}
var result = misc.filter(filterMisc)
console.log(result);