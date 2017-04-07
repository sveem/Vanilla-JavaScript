/*
 * Write a JS function that finds the elements at even positions in an array.
 * The input comes as array of string elements holding numbers.
 * The output is the return value of your function. Collect all elements in a string, separated by space.
 */

 const evenPosition = (input) => {
   
   let numbers = input.map(Number);
   let string = '';

   for (let i = 0; i < numbers.length; i++) {
     if (i % 2 === 0) {
       string += numbers[i] + ' ';	
     }
   }   
   return string;
 };

 console.log(evenPosition(['20', '30', '40']));
 console.log(evenPosition(['5', '10']));

