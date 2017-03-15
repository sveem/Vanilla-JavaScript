/*
 * Write a JS function that read a number n as input and prints all numbers from 1 to n, concatenated as a single string.
 * The input comes as array of one string element that needs to be parsed as a number.
 * The output should be returned as a result of your function.
 */

let number = ['11'];

const stringOfNumbers = (input) => {
  let result = '';
  let num = Number(input);

  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

console.log(stringOfNumbers(number));