/*
 * Write a JS function that calculates and prints the sum of the first and the last elements in an array. 
 * The input comes as array of string elements holding numbers.
 * The output is the return value of your function.
 */

 const sum = (input) => {
   let first = Number(input[0]);
   let last = Number(input[input.length - 1]);

   return first + last;
 };

 console.log(sum(['20', '30', '40']));
 console.log(sum(['5', '10']));