let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here
let squared = numbers.map(num => num * num)
let filtered = squared.filter(num => num > 30)
filtered.forEach(num => console.log(`${num} is larger than 30`))