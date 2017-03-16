/*
 * Write a JS function that calculates the area of the figure on the right by given values for w, h, W and H. The lower right corner is always common for the two rectangles.
 * The input comes as array of string elements that need to be parsed as numbers.
 * The output should be returned as a result of your function.
 */

 let input = ['2', '4', '5', '3'];
 let input1 = ['13', '2', '5', '8'];

 const figureArea = (array) => {
   let w = Number(array[0]);
   let h = Number(array[1]);
   let W = Number(array[2]);
   let H = Number(array[3]);

   let area1 = w * h;
   let area2 = W * H;
   let area3 = Math.min(w, W) * Math.min(h, H);

   return area1 + area2 - area3;

 };

 console.log(figureArea(input));
 console.log(figureArea(input1));