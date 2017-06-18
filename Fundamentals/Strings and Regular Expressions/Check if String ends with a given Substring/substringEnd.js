/*
 * Write a JS function that checks if a given string, ends with a given substring.
 * The input comes as array of strings. There will always be only 2 strings of input. 
 * The first string will represent the main one. The second one will represent the substring.
 * The output is either “true” or “false” based on the result of the check.
 * The comparison is case-sensitive!
 */

 let data = ['This sentence ends with fun?', 'fun?'];
 let data1 = ['This is Houston, we have…', 'We have…'];
 let data2 = ['The new iPhone has no headphones jack.', 'o headphones jack.'];

 const substringEnd = input => {
   let sentence = input[0].split('').reverse().join('');
   let string = input[1].split('').reverse().join('');
  
   let result = sentence.indexOf(string);
  
   return String(result >= 0);
 };

 console.log(substringEnd(data));
 //Output: 'true'
 console.log(substringEnd(data1));
 //Output: 'false'
 console.log(substringEnd(data2));
 //Output: 'true'