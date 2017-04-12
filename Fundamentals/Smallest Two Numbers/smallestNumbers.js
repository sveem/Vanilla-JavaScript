/*
 * Write a JS function that prints the two smallest elements from an array of numbers.
 * The input comes as array of string elements holding numbers.
 * The output is printed on the console on a single line, separated by space.
 */

let input1 = ['30', '15', '50', '5'];
let input2 = ['3', '0', '10', '4', '7', '3'];

const oddNums = array => {

  let first, second,
    result = array
      .map(Number)
      .sort((a, b) => a > b);

  first = result[0];
  second = result[1];

  return first + ' ' + second;
};

console.log(oddNums(input1));
//Output: 5 15
console.log(oddNums(input2));
//Output: 0 3