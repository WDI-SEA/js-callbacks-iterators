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
foods.forEach(e => {
 if (e.level === "very") {
  console.log(`${e.name} is very delicious`);
 } else if (e.level === "mostly") {
  console.log(`${e.name} is most delicious`);
 } else if (e.level === "not very") {
  console.log(`${e.name} is not very delicious`);
 } else {
  console.log(`i don't have an opinion on that yet`);
 }
})
