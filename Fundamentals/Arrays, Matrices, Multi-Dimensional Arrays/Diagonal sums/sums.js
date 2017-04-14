/*
 * A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). 
 * Write a JS function that finds the sum at the main and at the secondary diagonals.
 * The input comes as array of string elements. Each element contains the elements from one row of a matrix,
 * separated by space.
 * The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal,
 * then the sum at the secondary diagonal.
 */

let input1 = 
  [
    '20 40',
    '10 60'
  ];

let input2 = 
  [
    '1 5 17',
    '-1 7 14',
    '1 -8 89'
  ];

const sum = (array) => {
  
  let 
    firstDiagonal = 0,
    secondDiagonal = 0,
    matrix = array.map(el => el.split(' ').map(Number));

  for (let row = 0; row < matrix.length; row++) {
    firstDiagonal += matrix[row][row];
    secondDiagonal += matrix[row][matrix.length - row - 1];
  }

  return firstDiagonal + ' ' + secondDiagonal;
};

console.log(sum(input1));
//Output: 80 50
console.log(sum(input2));
//Output: 97 25