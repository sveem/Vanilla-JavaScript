/*
 * Write a JS function that calculates the distance between the two points in 3D by given coordinates.
 * The input comes as an array of strings that need to be parsed as numbers. The first three elements are the x, y and z
 * coordinates for the first point and the second set of arguments are the coordinates of the other point.
 * The output should be printed to the console.
 * Hint:You can find the horizontal and vertical offset between two points by calculating the difference between their
 * respective coordinates. Use Pythagoras’ theorem to find the distance.
 */

let distance1 = ['1', '1', '0', '4', '5', '0'];
let distance2 = ['3.5', '0', '1', '0', '2', '-1'];


const distance3D = (input) => {

  let x1 = Number(input[0]);
  let y1 = Number(input[1]);
  let z1 = Number(input[2]);

  let x2 = Number(input[3]);
  let y2 = Number(input[4]);
  let z2 = Number(input[5]);

  // The Distance Formula - Pythagorean Theorem.
  let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));

  return distance;
};

console.log(distance3D(distance1));
console.log(distance3D(distance2));