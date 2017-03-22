/*
 * Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).
 * The input comes as array of one string element, holding a number.
 * The output should be printed to the console. 
 * Print odd for odd numbers, even for even number and invalid for numbers that contain decimal fractions.
 */

 let input1 = ['5'];
 let input2 = ['8'];
 let input3 = ['1.5'];

 const oddOrEven = (array) => {
   let number = Math.abs(array[0]);

   if (number % 2 === 0) {
     return 'odd';
   } else if (number % 2 === 1) {
     return 'even';
   } else {
     return 'invalid';
   }
 };

 console.log(oddOrEven(input1));
 console.log(oddOrEven(input2));
 console.log(oddOrEven(input3));