var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)


// Your code goes here

var result4 = misc.filter(element => typeof element === "string"); 


console.log(result4);


//rome solution for misc[5]

// const allStrings = misc.filter(element => {
//     if (typeof element === 'string') {
//         return element;
//     } else if (Array.isArray(element)) {
//         element.forEach(el => {
//             if (typeof el === 'string'){
//                 return el;
//             }
//         })
//     }
// });

// function getAllString(array) {
//     let result7 = [];
//     for (let i=0; i<array.length; i++) {
//         let element = array[i];
//         if (typeof element === 'string') {
//             result.push(element);
//         } else if (Array.isArray(element)) {
//             element.forEach(ele => {
//                 if (typeof ele === 'string') {
//                     result.push(ele);
//                 }
//             })
//         }
//     }
//     // console.log('hey Subrata => ', result7);
//      return result7;
// }

// console.log (getAllString(misc));



//Rome Soution

function getAllString(array) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        let element = array[i]; // 3, true, 
        if (typeof element === 'string') {
            result.push(element);
        } else if (Array.isArray(element)) {
            element.forEach(ele => {
                if (typeof ele === 'string') {
                    result.push(ele);
                }
            })
        }
    }
    return result;
}
console.log(getAllString(misc));