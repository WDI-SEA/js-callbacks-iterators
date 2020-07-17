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

// (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

function isCool (person) {
	return person.coolnessScore > 20;
}


people.filter(e => {
	if (e.coolnessScore > 20) {
		console.log(`wowie ${e.name} u r cool`);
	} else {
		console.log(`sorry ${e.name} u r not cool`);
	}
});