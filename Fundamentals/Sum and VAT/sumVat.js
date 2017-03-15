/*
 * Write a JS function that sums a variable number of prices and calculates their VAT (Value Add Tax, 20%).
 * The input comes as array of string elements that need to be parsed as numbers. 
 * The number of elements will be different every time.
 * The output should be printed to the console on a new line for every entry.
 */

let input1 = ['1.20', '2.60', '3.50'];
let input2 = ['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445'];

const sumVat = (array) => {
  let sum, vat, total;

  sum = array.reduce((acc, val) => {
    return acc + Number(val);
  }, 0);
  
  vat = (sum * 20) / 100;
  total = sum + vat;

  return (`sum = ${sum}\nVAT = ${vat}\ntotal = ${sum + vat}`);

};

console.log(sumVat(input1));
console.log(sumVat(input2));