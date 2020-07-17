// Use the .forEach iterator to loop over 
// the following array of objects and 
// say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

 var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here
console.log(foods[0])

foods.forEach(function(good){
  console.log(good.name + ' is ' + good.level + ' bangin! ')
})