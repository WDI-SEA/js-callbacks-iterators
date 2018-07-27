//Understanding the forEach loop.
//directions: Use forEach loops to solve the following problems.


//Question 1
//Write a forEach loop that prints out each name
console.log("QUESTION 1");

var names = ["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"];


//write a forEach loop here.
names.forEach(function(name){
  console.log(name);
});

//Question 2
//Using the above names array, write a forEach loop that
//creates a NEW array with capitalized names
console.log("QUESTION 2");

var capitalizedNames = [];

//forEach loop here
names.forEach(function(name){
  capitalizedNames.push(name);
});

console.log(capitalizedNames);


//Question 3
//Using the above names, write a forEach loop that counts the total
//amount of letters in all the names combined
//(e.g., "Bob" is 3 letters, + "Sally" with 5 letters + ... and so on)
console.log("QUESTION 3");

var totalNumberOfLetters = 0;

//Write a forEach loop
names.forEach(function(name){
  totalNumberOfLetters++;
});

console.log("Total letters: " + totalNumberOfLetters);

//BONUS: Solve Question3 with reduce


//Question 4
//An array of book objects is defined below.
//Use a forEach loop to print out the title of each book.
console.log("QUESTION 4");

var books = [
  { title: "Stranger in a Strange Land", author: "Robert Heinlein"},
  { title: "The Moon is a Harsh Mistress", author: "Robert Heinlein"},
  { title: "Childhood's End", author: "Arthur C. Clarke"},
  { title: "Slaughterhouse 5", author: "Kurt Vonnegut"},
  { title: "Cat's Cradle", author: "Kurt Vonnegut"},
  { title: "Breakfast of Champions", author: "Kurt Vonnegut"},
  { title: "A Scanner Darkly", author: "Phillip K. Dick"},
  { title: "Do Androids Dream of Electric Sheep", author: "Phillip K. Dick"}
];

//forEach loop goes here
books.forEach(function(book){
  console.log(book.title);
});
//Question 5
//Using the above books array, write a forEach loop that counts
//how many books are written by Kurt Vonnegut

var totalBooksByKV = 0;

//Write forEach loop here
console.log("QUESTION 5");
books.forEach(function(book){
  if(book.author === "Kurt Vonnegut")
    totalBooksByKV++;
});

console.log("Total books by Kurt Vonnegut: " + totalBooksByKV);

//Question 6
//Take the logic you came up with in question 5 and genericize it
//into a function that accepts author and the books array as parameters.
//(Implement the following)
console.log("QUESTION 6");

function findAuthorsBookCount(allBooks, authorName){
  //Implement function
  var count=0;
  allBooks.forEach(function(book){
    if (book.author === authorName)
      count++;
  });
  return count;
}

var author1 = "Kurt Vonnegut";
var author2 = "Robert Heinlein";
var author3 = "Arthur C. Clarke";

console.log("I have " + findAuthorsBookCount(books, author1) + " books by " + author1 + " in my library.");
console.log("I have " + findAuthorsBookCount(books, author2) + " books by " + author2 + " in my library.");
console.log("I have " + findAuthorsBookCount(books, author3) + " books by " + author3 + " in my library.");