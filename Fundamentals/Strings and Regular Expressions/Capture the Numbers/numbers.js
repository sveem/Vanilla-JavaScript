/*
 * Write a JS function that finds all numbers in a sequence of strings.
 * The input comes as array of strings. Each element represents one of the strings.
 * The output is all the numbers, extracted and printed on a single line – each separated by a single space.
 */

let input = ['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45'];
let input1 = ['123a456', '789b987', '654c321', '0'];
let input2 = ['Let’s go11!!!11!', 'Okey!1!'];

function findNumbers(array) {

  let number = array.join(' ');
  let regex = /\d+/g;
  let result = number.match(regex);

  return result.join(' ');
}

console.log(findNumbers(input));
//Output: 300 3 22 45
console.log(findNumbers(input1));
//Output: 123 456 789 987 654 321 0
console.log(findNumbers(input2));
//Output: 11 11 1 