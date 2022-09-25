
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array

const squaerd = numbers.map(num => num * num)

console.log(squaerd)

// Filter the resulting array by numbers larger than 30

const filter = squaerd.filter((squar) => {
  return squar > 30
})

console.log(filter)
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

for(let i=0; i<filter.length;i++)
  {
    console.log( filter[i]+"is larger than 30")
  }
