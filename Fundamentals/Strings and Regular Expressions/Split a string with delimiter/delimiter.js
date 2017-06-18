/*
 * Write a JS function that splits a string with a given delimiter.
 * The input comes as an array of strings. There will be exactly 2 strings of input. The first one is the string you need to
 * split and the second one is the delimiter.
 * The output should consist of all elements you’ve received, after you’ve split the given string by the given delimiter.
 * Each element should be printed on a new line.
 */

 const delimiter = input => {
   
   let string = input[0];
   let delimiter = input[1];
   let splittedString = string.split(delimiter);
   let result = '';
 
   for (let i = 0; i < splittedString.length; i++) {
     result = result.concat(splittedString[i], '\n');
   }

   return result;
 };

 console.log(delimiter(['One-Two-Tree-Four-Five', '-']));
 console.log(delimiter(['http://platform.softuni.bg', '.']));