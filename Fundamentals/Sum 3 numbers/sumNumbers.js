/*
 * Write a JS function that takes three numbers as input and outputs their sum.
 * The input comes as array of string elements that need to be parsed as numbers.
 * The output should be printed to the console.
 */

 let input1 = ['2', '3', '4'];
 let input2 = ['1.5', '1.5', '-1'];

 const sumNumbers = (array) => {
   return array.reduce((acc, val) => {
     return acc + Number(val);	
   }, 0);
 };

 console.log(sumNumbers(input1));
 console.log(sumNumbers(input2));
