let people = [
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

let isCool = person => person.coolnessScore > 20


console.log(30 > 20) // true
// Your code goes here
const coolPeople = people.filter(isCool)
const coolPeople = people.filter((person) => {
  if(isCool(person)) {
    return true
  } else {
    return false
  }
})