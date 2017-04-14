/*
 * Write a JS function that prints all the symbols of a string, each on a new line.
 * The input comes as array of one string element.
 * The output is printed on the console, each letter on a new line.
 */

 let string = ['Hello, World!'];
 let string1 = ['SoftUni'];

 const printLetters = input => {
  
   let output = '';  
   let word = input.join('');

   for (let i = 0; i < word.length; i++) {
     output = output + `str[${i}] -> ${word[i]}\n`;
   }

   return output;
 };

 console.log(printLetters(string));
 console.log(printLetters(string1));
