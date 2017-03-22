/*
 * Write a JS function to calculate how many boxes will be needed to fit n bottles if each box fits k bottles.
 * The input comes as array of strings, where each element holds a number. 
 * The first element is the number of bottles and the second is the capacity of a single box.
 * The output should be printed to the console.
 */

 const findBoxes = (bottles, capacity) => {
   let boxes = Math.ceil(bottles / capacity);
   return boxes;
 };

 console.log(findBoxes(20, 5));
 console.log(findBoxes(15, 7));
 console.log(findBoxes(5, 10));
