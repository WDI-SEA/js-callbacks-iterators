
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
let foods = ["pizza", "tacos", "ice cream", "sushi"];

// your code here

for(let i=0; i<foods.length; i++) {
  console.log("I like "+foods[i])
}

foods.forEach(function(food, i) {
  foods[i] = food.toUpperCase()
})

console.log(foods)