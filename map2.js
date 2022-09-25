let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here

//1- sequaring each number:
let sequare = numbers.map((num) => {

    return Math.pow(num, 2)
  })
  
  console.log(sequare)
  
  //2- -filter the resulting array:
  let largerThan = sequare.filter((num)=>{
      if (num > 30) {
        return true
    }
  })
  
  console.log(largerThan)
  
  //3- print 
  let printNumbers = largerThan.forEach((num)=>{
    console.log(num + " is larger than 30")
  })