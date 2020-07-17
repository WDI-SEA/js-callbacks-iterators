var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here

// function isString(obj) {
//     if( typeof(obj) === 'string' ){
//       return true;
//     }
//   }
  
  
//   var trueString = misc.filter(isString);
  
//   console.log(trueString); 

  const allString = misc.filter(element => {
    console.log(element);
    if (typeof element === 'string'){
      return element;
    }
  })
  console.log(allString);

  // check and get a String also within an array! BONUS!!!
//   function getAllString(array) {
//     let result = [];
//     for(let i = 0; i < array.length; i++) {
//         let element = array[i]; // 3, true, 
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
//     return result;
// }
// console.log(getAllString(misc));