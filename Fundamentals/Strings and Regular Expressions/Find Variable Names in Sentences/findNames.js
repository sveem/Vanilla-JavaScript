/*
 * Write a JS function that finds all variable names in a given string. A variable name starts with an underscore (“_”)
 * and contains only Capital and Non-Capital English Alphabet letters and digits. Extract only their names, without the
 * underscore. Try to do this only with regular expressions.
 * The input comes as an array of strings containing one element - the string on which you have to perform the
 * matching.
 * The output consists of all variable names, extracted and printed on a single line, each separated by a comma.
 */

let data = ['The _id and _age variables are both integers.'];
let data1 = ['Calculate the _area of the _perfectRectangle object.'];
let data2 = ['__invalidVariable _evenMoreInvalidVariable_ _validVariable'];

const findNames = input => {
 
  let regex = /\b_([A-Za-z0-9]+)\b/g;
  let storage = [];
  let match;

  while (match = regex.exec(input)) {
    storage.push(match[1]);
  }
  return storage.join(',');
};

console.log(findNames(data));
//Output: 'id,age'
console.log(findNames(data1));
//Output: 'area,perfectRectangle'
console.log(findNames(data2));
//Output: 'validVariable'