/*
 * Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. 
 * Look at the examples to get an idea.
 * The input comes as an array with one string element in it, which needs to be parsed to a number.
 * The output is a series of lines printed on the console, forming a triangle of variable size.
 */

 let data1 = ['1'];
 let data2 = ['2'];
 let data3 = ['5'];

 const triangleOfStars = (input) => {
   let number = Number(input[0]);
   let triangle = '', row, col;

   for (row = 0; row < number; row++) {
     triangle += '*';
     for (col = 0; col < row; col++) {
       triangle += '*';
     }
     triangle += '\n';
   }

   for (row = 0; row < number; row++) {
     for (col = 0; col < number - row - 1; col++) {
       triangle += '*';
     }
     triangle += '\n';
   }
   console.log(triangle);
 };

 triangleOfStars(data3);