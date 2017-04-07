/*
 * Write a JS program that performs and outputs different operations on an array of elements. 
 * Implement the following operations:
 * -Sum(a) - calculates the sum all elements from the input array
 * -Sum(1/a) - calculates the sum of the inverse values (1/a) of all elements from the array
 * -Concat(a) - concatenates the string representations of all elements from the array
 * The input comes as an array of elements that must be parsed as numbers, where necessary.
 * The output should be printed on the console on a new line for each of the operations.
 */

 let numbers1 = ['1', '2', '3'];
 let numbers2 = ['2', '4', '8', '16']; 

 const elements = (input) => {

   let array = input.map(Number);

   let operations = {
     sum: function(numbers) {
       let result = 0;
       numbers.forEach(el => result += el);
       return result;
     },
     inverse: function(numbers) {
       return numbers.reduce((acc, val) => {
         return acc + (1 / val); 
       }, 0);
     },
     concat: function(numbers) {
       let string = '';
       numbers.forEach(el => string += el);
       return string;
     }
   };

   console.log(operations.sum(array));
   console.log(operations.inverse(array));
   console.log(operations.concat(array));

 };

 elements(numbers1);
 elements(numbers2);
 