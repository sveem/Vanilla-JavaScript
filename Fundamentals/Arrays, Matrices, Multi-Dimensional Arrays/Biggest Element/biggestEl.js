/*
 * Write a JS function that finds the biggest element inside a matrix.
 * The input comes as array of string elements. 
 * Each element contains the elements from one row of a matrix, separated by space.
 * The output is the return value of your function. Find the biggest element and return it.
 */

let input1 = 
  [
    '20 50 10', 
    '8 33 145'
  ];

let input2 = 
  [
    '3 5 7 12', 
    '-1 4 33 2', 
    '8, 3, 0, 4'
  ];

const oddNums = array => {

  let matrix = 
    array
    .join(' ')
    .split(' ')
    .map(Number)
    .sort((a, b) => a < b)
    .shift();

  return matrix;
};

console.log(oddNums(input1));
//Output: 145
console.log(oddNums(input2));
//Output: 33