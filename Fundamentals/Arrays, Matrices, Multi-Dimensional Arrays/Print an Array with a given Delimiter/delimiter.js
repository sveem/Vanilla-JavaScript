/*
 * Write a JS function that prints a given array.
 * The input comes as array of strings. The last element of the array is the delimiter.
 * The output is the same array, printed on the console, each element separated from the others by the given
 * delimiter.
 */

let input1 = ['One', 'Two', 'Three', 'Four', 'Five', '-'];
let input2 = ['How about no?', 'I', 'will', 'not', 'do', 'it!', '_'];

const printDelimiter = input => {

  let delimiter = String(input[input.length - 1]);
  let text = '';

  for (let i = 0; i < input.length - 1; i++) {
    text = text + (input[i] + delimiter);
  }

  text = text.substring(text.length - 1, 0);
  return text;
};

console.log(printDelimiter(input1));
//Output: One_Two_Three_Four_Five
console.log(printDelimiter(input2));
//Output: How about no?_I_will_not_do_it!
