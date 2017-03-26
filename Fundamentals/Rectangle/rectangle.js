/*
 * Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
 * The input comes as array of strings that need to be parsed as numbers.
 * The output should be printed to the console on two lines.
 */

const rectangle = (input) => {
  let w = Number(input[0]);
  let h = Number(input[1]);

  let area = w * h;
  let perimeter = 2 * (w + h);

  console.log(area);
  console.log(perimeter);
};

rectangle(['2', '2']);
rectangle(['1', '3']);
rectangle(['2.5', '3.14']);