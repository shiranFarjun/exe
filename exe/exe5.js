Array(100-0)//(end-start)  Create an array as long as the range of numbers.
  .fill(0)  //Fill it with a value so we can iterate it.
  .map((_, n) => n )  //Map each element to its index + the base value.
  .filter(n => n % 2)   //Filter out only the odd numbers 
  .forEach(n => console.log(n)); //Iterate each element and print.


