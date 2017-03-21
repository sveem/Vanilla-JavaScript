/*
 * Write a JS function that calculates a triangle’s area by its 3 sides.
 * The input comes as array of three string elements, each holding a number, representing one side of a triangle.
 * The output should be printed to the console.
 */

 let input = [2, 3.5, 4];

 const triangleArea = (parameters) => {
   
   let a = input[0];
   let b = input[1];
   let c = input[2];

   let sides = (Number(a) + Number(b) + Number(c)) / 2;
   let area = Math.sqrt(sides * (sides - a) * (sides - b) * (sides - c));
   return area;
 };

 console.log(triangleArea(input));