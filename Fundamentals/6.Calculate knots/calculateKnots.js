/*
 * Write a JavaScript function that accepts a number variable to convert from km/h to knots (knot is a maritime unit
 * measuring speed). The result should be printed on the console, rounded up to the second sign after the decimal
 * point. Run the program through Node.js.
 */

 const calculateKnots = (num) => {
   let knot = 1.852;
   let result = num / knot;
   return Number(result.toFixed(2));
 };

 console.log(calculateKnots(20));
 console.log(calculateKnots(112));
 console.log(calculateKnots(400));