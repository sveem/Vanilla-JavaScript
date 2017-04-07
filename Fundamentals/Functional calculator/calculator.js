/*
 * Write a JS program that receives two variables and an operator and performs a calculation between the variables,
 * using the operator. Store the different functions in variables and pass them to your calculator.
 * The input comes as an array of three strings – two need to be parsed as numbers, and one is the operator.
 * The output should be printed on the console.
 */


let input1 = ['2', '4', '+'];
let input2 = ['3', '3', '/'];
let input3 = ['18', '-1', '*'];

const calculator = (array) => {

  let numA = Number(array[0]);
  let numB = Number(array[1]);
  let operator = array[2];

  let calculation = {
    '+': function(a, b) {
      return a + b;	
    },
    '-': function(a, b) {
      return a - b;	
    },
    '*': function(a, b) {
      return a * b;	
    },
    '/': function(a, b) {
      return a / b;	
    },
  };

  return calculation[operator](numA, numB);
};

console.log(calculator(input1));
console.log(calculator(input2));
console.log(calculator(input3));