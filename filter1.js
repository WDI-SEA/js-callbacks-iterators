var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// (1) Write code that uses the filter function, 
// and the below isCool function to return a list 
// of people who are cool.

// var isCool = function(people) {
// 	return people.coolnessScore > 20;
// }

// // Your code goes here
// const coolPeeps = people.filter(element => {
// 	if (isCool(element) === true) {
// 		return element;
// 	}
// });

// console.log(coolPeeps);

var isCool = function(people) {
	return people.coolnessScore > 20;
}

// Your code goes here
const coolPeeps = people.filter(isCool);
console.log(coolPeeps);
	