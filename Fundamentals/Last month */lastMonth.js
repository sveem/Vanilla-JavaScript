/*
 * Write a JS function that receives a date as array of strings containing day, month and year in that order. 
 * Your task is to print the last day of previous month (the month BEFORE the given date). 
 * Check the examples to better understand the problem.
 * The input comes as an array of string elements.
 * The output should be a single number representing the last day of the previous month. 
 */

 let input1 = ['17', '3', '2002'];
 let input2 = ['13', '12', '2004'];

 const month = (array) => {
 
   let day = Number(array[0]);
   let month = Number(array[1]);
   let year = Number(array[2]);

   let date = new Date(year, month - 1, day);
   let newDate = new Date(date.setDate(1));
   let singleDay = 24 * 60 * 60 * 1000;
   let lastDay = new Date(date.getTime() - singleDay);

   return lastDay.getDate(); 
 };

 console.log(month(input1));
 console.log(month(input2));