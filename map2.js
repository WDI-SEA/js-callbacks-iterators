let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here

const square = numbers.map(num => num * num)

console.log(square)


const filter = square.filter((squar) => {
  return squar > 30
})

console.log(filter)

for (let i = 0; i < filter.length; i++) {
  console.log(filter[i] + " is larger than 30")
}
