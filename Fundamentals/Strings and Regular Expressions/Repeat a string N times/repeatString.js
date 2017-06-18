/*
 * Write a JS function that repeats a given string, N times.
 * The input comes as array of strings. There will always be only 2 strings of input. The first string will represent the
 * one you need to repeat. The second one will represent the times you need to repeat it.
 * The output is a big string, containing the given one, repeated N times.
 */

 let input = ['repeat', '5'];
 let input1 = ['magic is real', '3'];

 const repeatAString = array => {

   let string = array[0];
   let number = Number(array[1]);
   let result = [];

   while (result.length <= number) {
     result.push(string);
   }

   return result.join('');	
 };

 console.log(repeatAString(input));
 //Output: repeatrepeatrepeatrepeatrepeat
 console.log(repeatAString(input1));
 //Output: magic is realmagic is realmagic is real