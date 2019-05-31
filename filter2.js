var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array.
var filtedOutString = misc.filter(function(check){
          return (typeof check !== "string")

      // if its everthing else but  a string  remove
       
     
});
console.log(filtedOutString);
// Your code goes here
