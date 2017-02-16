/*
 * You are given an array of objects. Your task is to write a JavaScript code that filters out the numbers of that array
 * (removes all non-number objects). Then you should: 
 * 1. Find the Min number, 
 * 2. Find the Max number, 
 * 3. Find the most frequent number. 
 * Finally you should print out the numbers you have found and the filtered array sorted in
 * descending order.
 */

 let input =  [ 
   "Pesho", 2, "Gosho", 
   12, 2, "true", 9, 
   undefined, 0, "Penka", 
   { bunniesCount: 10}, 
   [10, 20, 30, 40] 
 ];

 let filtered, minValue, maxValue, mostFrequent; 

 filtered = input.filter((el) => {
   return typeof el === "number";
 })
 .sort((a, b) => a < b);

 minValue = filtered[filtered.length - 1];
 maxValue = filtered[0];

 filtered.forEach((el, index, array) => {
   if (array.indexOf(el) !== index) {
     mostFrequent = el;
   }
 });

 console.log("Min value:", minValue);
 console.log("Max value:", maxValue);
 console.log("Most frequent number:", mostFrequent);
 console.log(filtered);