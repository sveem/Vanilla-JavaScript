/*
 * Write a JS function that extracts only those numbers that form a non-decreasing subsequence. In other words, you
 * start from the first element and continue to the end of the given array of numbers. Any number which is LESS
 * THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it
 * as the current biggest one and you continue to the next number.
 * The input comes as array of strings. Each element will represent a number.
 * The output is the processed array after the filtration, which should be a non-decreasing subsequence. 
 * Each element should be printed on a new line.
 */

let input = ['1', '3', '8', '4', '10', '12', '3', '2', '24']; 
let input1 = ['1', '2', '3', '4'];
let input2 = ['20', '3', '2', '15', '6', '1'];

const subsequence = array => {
  let newArray = array.map(Number);
  let result = newArray.splice(0, 1);
  newArray.filter(el => {
    if (el >= result[result.length - 1]) {
      result.push(el);
    }
  });
  return result.join('\n');
};

console.log(subsequence(input));
console.log(subsequence(input1));
console.log(subsequence(input2));