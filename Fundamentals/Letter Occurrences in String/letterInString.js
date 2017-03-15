/*
 * Write a JS function that counts how many times a specific letter occurs in a given string.
 * The input comes as array of string elements. 
 * The first element is the string to check and the second element is the letter to count.
 * The output should be returned as a result of your function.
 */

 let string1 = ['hello', 'l'];
 let string2 = ['panther', 'n'];

 const findLetters = (input) => {
   let word = input[0];
   let char = input[1];
   let letter = new RegExp(char, 'gi');

   return word
     .match(letter)
     .length;
 };

 console.log(findLetters(string1));
 console.log(findLetters(string2));