let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here
let squareArr = numbers.map((number)=>{
  
  
    return (Math.pow(number, 2))
  
    
  })
  
  
  let filteredArr = squareArr.filter((number)=>{
    if(number>30){
      return number
    }
    
  })
  
  filteredArr.forEach((number) => {
    console.log(`${number} is larger 30.`)
  })