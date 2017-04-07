/*
 * Write a JS function that checks if an input string is a palindrome.
 * The input comes as an array with a single string element.
 * The output is the return value of your function. 
 * It should be true if the string is a palindrome and false if it’s not.
 */

let palindrome1 = ['haha'];
let palindrome2 = ['racecar'];
let palindrome3 = ['unitinu'];

const checker = (input) => {
  let palindrome = 
    input[0]
    .split('')
    .reverse()
    .join('');
  
  return palindrome === input[0];

};

console.log(checker(palindrome1));
console.log(checker(palindrome2));
console.log(checker(palindrome3));