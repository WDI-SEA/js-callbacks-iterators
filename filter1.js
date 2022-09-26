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
  
  let isCool = people.filter((person) => {
	return person.coolnessScore > 20
   
  })
  
  console.log(isCool)
  
