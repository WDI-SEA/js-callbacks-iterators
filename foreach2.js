// Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
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

//I wanted to use something I
//found that we had not covered, 
//so I am citing the website here
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

foods.forEach(foodLevel =>{
  
     console.log(`${foodLevel.name} is ${foodLevel.level} delicious`);

    })