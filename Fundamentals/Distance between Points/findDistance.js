/*
 * Write a JS function that calculates the distance between two points by given x and y coordinates. 
 * Use objects to store the two points.
 * The input comes as array of four string elements in the format [x1, y1, x2, y2] that need to be parsed as numbers.
 * Each pair of elements are the coordinates of a point in 2D space.
 * The output should be returned as a result of your function.
 */

let input1 = ['2', '4', '5', '0' ];
let input2 = ['2.34', '15.66', '-13.55', '-2.9985' ];

const distance = (array) => {
  let newArray = array.map(Number);
  
  let x1 = newArray[0];
  let y1 = newArray[1];
  let x2 = newArray[2];
  let y2 = newArray[3];
  
  let sumX = Math.pow((x2 - x1), 2);
  let sumY = Math.pow((y2 - y1), 2);
  let sum = Math.sqrt(sumX + sumY);
  
  return sum;
};

console.log(distance(input1));
console.log(distance(input2));