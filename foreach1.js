
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
var foods = ["pizza", "tacos", "ice cream Ltn. Dan", "sushi"];

// your code here

console.log(foods);

foods.forEach(function(food){
    console.log('I like me some ' + food)
})