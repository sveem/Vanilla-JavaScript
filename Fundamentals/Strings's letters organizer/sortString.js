/*
 * Write a JavaScript function sortLetters(string, boolean) that gets as an input a string and a boolean. The function
 * sorts all letters in the string in alphabetical order and returns the newly formed string. The sorting is ascending if
 * the boolean is true otherwise the sorting is in descending order.
 * Note: The sorting is case-insensitive but the output should use the same casing as the input!
 * Hint: You are allowed to use .sort() function.
 */

 let input = 'HelloWorld';

 const sortLetters = (string, boolean) => {
   let stringToArray = string.split('');
   let result;

   if (boolean) {
     result = stringToArray.sort((a, b) => a.toLowerCase() > b.toLowerCase());
   } else {
     result = stringToArray.sort((a, b) => a.toLowerCase() < b.toLowerCase());	
   }

   return result.join('');
 };


 console.log(sortLetters(input, true));
 console.log(sortLetters(input, false));

 