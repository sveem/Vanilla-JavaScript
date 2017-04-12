/*
 * You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array,
 * doubled and in reverse order.
 * The input comes as array of string elements holding numbers.
 * The output is printed on the console on a single line, separated by space.
 */

let input1 = ['10', '15', '20', '25'];
let input2 = ['3', '0', '10', '4', '7', '3'];

const oddNumbers = (array) => {
  
  let result = array
    .map(Number)
    .filter((num, index) => index % 2 === 1)
    .map( num => num * 2)
    .reverse()
    .join(' ');

  return result;
};

console.log(oddNumbers(input1));
console.log(oddNumbers(input2));