/*
 * Write a JS function that reads an 8-bit binary number and converts it to a decimal.
 * The input comes as an array of one string element, representing a binary number.
 * The output should be printed to the console.
 */

 let input1 = ['00001001'];
 let input2 = ['11110000'];

 const binaryConvertor = (array) => {
   return parseInt(array, 2);
 };

 console.log(binaryConvertor(input1));
 console.log(binaryConvertor(input2));