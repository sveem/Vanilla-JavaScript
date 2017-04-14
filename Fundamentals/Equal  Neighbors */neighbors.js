/*
 * Write a JS function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers
 * or strings).
 * The input comes as array of string elements. 
 * Each element contains the elements from one row of a matrix, separated by space.
 * The output is return value of you function. Save the number of equal pairs you find and return it.
 */

let input1 = 
  [
    '2 3 4 7 0', 
    '4 0 5 3 4', 
    '2 3 5 4 2',
    '9 8 7 5 4'
  ];

let input2 = 
  [
    'test yes yo ho',
    'well done yo 6', 
    'not done yet 5'
  ]; 


const neighbors = array => {
	
  let matrix = array.map(element => element.split(' '));
  let neighbors = 0;

  for (let row = 0; row < matrix.length - 1; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      
      if (matrix[row][col] === matrix[row][col + 1]) {
        neighbors++;	
      }

      if (matrix[row][col] === matrix[row + 1][col]) {
        neighbors++;
      }

      if (row === matrix.length - 2 && matrix[row + 1][col] === matrix[row + 1][col + 1]) {
        neighbors++;
      }
    }
  }
  return neighbors;
};

console.log(neighbors(input1));
//Output: 1
console.log(neighbors(input2));
//Output: 2