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
//and the below isCool function to return a list of people who are cool.

var isCool = function(person) {
	return person.coolnessScore > 20;
}

// Your code goes here

var filterPerson = people.filter(function(people){
	return people.coolnessScore > 20;
})

console.log(filterPerson)

// const coolPeople = people.filter(eachPerson => {
// 	console.log(eachPerson);
// 	console.log(eachPerson.coolnessScore);

// 	let areTheyCool = isCool(eachPerson);
	
// 	if (areTheyCool){
// 		return eachPerson;
// 	}
// })
// console.log(coolPeople)