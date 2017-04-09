/*
 * Write a JS function that processes the elements in an array one by one and produces a new array. 
 * Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
 * The input comes as array of string elements holding numbers.
 * The output is printed on the console, each element on a new line.
 */

let input1 = ['7', '-2', '8', '9'];
let input2 = ['3', '-2', '0', '-1'];

const negVsPos = (array) => {
  
  let numbers = array.map(Number);
  let positive = [];
  let negative = [];

  numbers.forEach(el => {
    el >= 0 ? positive.push(el) : negative.unshift(el);
  });

  console.log(negative.join('\n'));
  console.log(positive.join('\n'));

};

negVsPos(input1);
negVsPos(input2);
