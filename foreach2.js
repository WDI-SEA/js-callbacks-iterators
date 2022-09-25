// Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

let foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here

let foods = [
  { name: "Pizza", level: "very" },
  { name: "Tacos", level: "mostly" },
  { name: "Cottage Cheese", level: "not very" }
];


// for(let i=0; i<foods.length; i++) {

const splitFood = foods.map((food) => {
  return {
    first: foods.split(" ")[0],
    last: foods.split(" ")[1],
  }
})
console.log(splitFood)