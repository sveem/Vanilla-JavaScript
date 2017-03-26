/*
 * Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T. Write a
 * JS function that calculates the distance between the two object at the end of the period.
 * The input comes as array of strings that need to be parsed as numbers. 
 * The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.
 * The output should be printed to the console. Calculate the distance in meters.
 */

 let input1 = ['0', '60', '3600'];
 let input2 = ['10', '11', '120'];
 let input3 = ['5', '-5', '40'];

 const distance = (array) => {
   let storage = array.map(Number);
   let hour = 60 * 60;
   let time = storage[2];

   let dist1 = (storage[0] * 1000) / hour;
   let dist2 = (storage[1] * 1000) / hour;

   return Math.abs((dist1 * time) - (dist2 * time));
 };

 console.log(distance(input1));
 console.log(distance(input2));
 console.log(distance(input3));