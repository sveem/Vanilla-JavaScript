/*
 * Write a JavaScript function extractObjects(array). As a function argument you are given an array of different objects
 * with different data types. Your task is to write the JavaScript function that filters out the Objects (all primitive data
 * type objects and arrays are filtered) and returns a new array with the extracted elements.
 * Note: Try to write the filter algorithm yourself and not use .filter() function. (Hint: Use procedural for loop)
 */

let array = [
  'Pesho', 4, 4.21,
  {name: 'Valyo', age: 16 },
  { type: 'fish', model: 'zlatna ribka' },
  [1, 2, 3],
  'Gosho',
  { name: 'Penka', height: 1.65}
];

const extractObjects = (input) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] instanceof Object && !Array.isArray(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
};

console.log(extractObjects(array));