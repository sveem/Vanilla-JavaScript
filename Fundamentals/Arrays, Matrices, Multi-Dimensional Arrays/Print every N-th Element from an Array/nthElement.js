/*
 * Write a JS function that prints every element of an array, on a given step.
 * The input comes as array of strings. The last element is N - the step.
 * The output is every element on the N-th step starting from the first one. 
 * If the step is “3”, you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. 
 * The elements must be printed each on a new line.
 */

let input1 = ['5', '20', '31', '4', '20', '2'];
let input2 = ['1', '2', '3', '4', '5', '6'];
let input3 = ['dsa', 'asd', 'test', 'tset', '2'];

const nthElement = array => {

  let result = array[0];
  let lastElement = Number(array[array.length - 1]);

  for (let i = 1; i < array.length - 1; i++) {
    if (i % lastElement === 0) {
      result += '\n' + array[i];
    }  
  }
  return result;
};

console.log(nthElement(input1));
//Output: 5, 31, 20
console.log(nthElement(input2));
//Output: 1
console.log(nthElement(input3));
//Output: dsa, test