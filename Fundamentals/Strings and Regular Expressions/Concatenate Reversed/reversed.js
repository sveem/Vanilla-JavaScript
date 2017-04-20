/*
 * Write a JS function that reverses a series of strings and prints them concatenated from last to first.
 * The input comes as array of strings.
 * The output is printed on the console. Print all strings concatenated on a single line, starting from the last input
 * string, going to the first. Reverse each individual string’s letters.
 */

let input1 = ['I', 'am', 'student'];
let input2 = ['race', 'car'];

const reversed = array => {
  let string = array.join('');
  let result = '';

  for (let char = string.length - 1; char >= 0; char--) {
    result += string[char];
  }
  return result;
};

console.log(reversed(input1));
// Output: tnedutsmaI
console.log(reversed(input2));
// Output: racecar