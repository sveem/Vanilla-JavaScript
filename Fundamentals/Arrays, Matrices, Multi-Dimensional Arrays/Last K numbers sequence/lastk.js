/*
 * You are given two integers n and k. Write a JS function that generates and prints the following sequence:
 * - The first element is 1
 * - Every following element equals the sum of the previous k elements
 * - The length of the sequence is n elements
 * The input comes as array of two string elements holding numbers. 
 * The first element represents the number n, and the second – the number k.
 * The output is printed on the console on a single line, separated by space.
 */

let input = ['6', '3'];
let input2 = ['8', '2'];

const lastK = (array) => {
  let n = Number(array[0]);
  let k = Number(array[1]);
  let nums = [1];
  let result = '';

  for (let i = 1; i < n; i++) {
    let temp = 0;
    for (let j = i - k; j <= i - 1; j++) {
      if (j >= 0) {
        temp += nums[j];
        nums[i] = temp;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    result += nums[i] + ' ';
  }

  return result;
};

console.log(lastK(input));
console.log(lastK(input2));