/*
 * Write a JS function that prints the first k and the last k elements from an array of numbers.
 * The input comes as array of string elements holding numbers. The first element represents the number k, all other
 * elements are from the array that needs to be processed.
 * The output is printed on the console on two lines. On the first line print the first k elements, separated by space. 
 * On the second line print the last k elements, separated by space.
 */

 let input1 = ['2', '7', '8', '9'];
 let input2 = ['3', '6', '7', '8', '9'];

 const knumbers = (array) => {

   let digits = array.map(Number);
   let firstK = digits.splice(0, 1);

   let first = digits.slice(0, firstK);
   let last = digits.slice(-firstK);
  
   console.log(first.join(' '));
   console.log(last.join(' '));

 };
 
 knumbers(input1);
 knumbers(input2);


