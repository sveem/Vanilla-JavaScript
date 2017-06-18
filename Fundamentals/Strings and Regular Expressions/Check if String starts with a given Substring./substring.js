/*
 * Write a JS function that checks if a given string, starts with a given substring.
 * The input comes as array of strings. There will always be only 2 strings of input. 
 * The first string will represent the main one. 
 * The second one will represent the substring.
 * The output is either “true” or “false” based on the result of the check.
 * The comparison is case-sensitive!
 */

 let data = ['How have you been?', 'how'];
 let data1 = ['The quick brown fox…', 'The quick brown fox…'];
 let data2 = ['Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'];

 
 const findSubstring = input => {
 
   let string = input[0];
   let substring = input[1];
   let flag = true;

   for (let i = 0; i < substring.length; i++) {
     if (substring.charCodeAt(substring[i]) !== string.charCodeAt(string[i])) {
       flag = false;
       return flag;
     }
   }
  
   return flag;
 };

 console.log(findSubstring(data));
 //Output: false
 console.log(findSubstring(data1));
 //Output: true
 console.log(findSubstring(data2));
 //Output: true