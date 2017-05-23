/*
 * Write a JS function that orders a given array of strings, by length in ascending order as primary criteria, and by
 * alphabetical value in ascending order as second criteria. 
 * The comparison should be case-insensitive.
 * The input comes as array of strings.
 * The output is the ordered array of strings.
 */


let input = ['alpha', 'beta', 'gamma']; 
let input1 = ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'];
let input2 = ['test', 'Deny', 'omen', 'Default'];

const sorting = array => {
  let result = array
    .sort()
    .sort((a, b) => a.length > b.length);
  return result.join('\n');
};

console.log(sorting(input));
//Output: beta, alpha, gamma
console.log(sorting(input1));
//Output: Jack, Isacc, George, Theodor, Harrison
console.log(sorting(input2));
//Output: Deny, omen, test, Default