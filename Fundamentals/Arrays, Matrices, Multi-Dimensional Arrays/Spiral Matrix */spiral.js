/*
 * Write a JS function that generates a Spirally-filled matrix with numbers, with given dimensions.
 * The input comes as array of strings. There will be exactly one element, containing the dimensions of the matrix,
 * which will be 2 numbers separated by a space.
 * The output is the matrix filled spirally starting from 1. 
 * You need to print every row on a new line, with the cells separated by a space. 
 */


 const spiralMatrix = ([input]) => {
 
   let [maxRows, maxCols] = input.split(' ').map(Number);
   let matrix = [];
   for (let i = 0; i < maxRows; i++) {
     matrix.push([]);
     for (let j = 0; j < maxCols; j++) {
       matrix[i].push(0);
     }
   }
  
   let element = 0;
   let col = -1;
   let row = 1;

   while (element < maxRows * maxCols) {
     row--;
     col++;
     
     while (col < maxCols && matrix[row][col] === 0) { 
       element++;
       matrix[row][col] = element;
       col++;
     }
     col--;
     row--;
       
     while (row >= 0 && matrix[row][col] === 0) {
       element++;
       matrix[row][col] = element;
       row--;
     }
     row++;
     col--;
        
     while (col >= 0 && matrix[row][col] === 0) {
       element++;
       matrix[row][col] = element;
       col--;
     }
     row++;
     col++;
        
     while (row < maxRows && matrix[row][col] === 0) {
       element++;
       matrix[row][col] = element;
       row++;
     }
   }
   
   console.log(matrix.map(row => row.join(' ')).join('\n'));
 };
 
 spiralMatrix(['3 3']);
 spiralMatrix(['5 5']);

