/*
 * Write a JS function that calculates the date of the next day by given year, month and day.
 * The input comes as array of three string elements that need to be parsed as numbers. 
 * The first element is the year, the second is the month and the third is the day.
 * The output should be returned as a result of your function.
 */

 let input = ['2016', '9', '30'];

 const nextDay = (array) => {
   let year = Number(array[0]);
   let month = Number(array[1]);
   let day = Number(array[2]);

   let date = new Date(year, month - 1, day);
   let singleDay = 24 * 60 * 60 * 1000;
   let newDate = new Date(date.getTime() + singleDay);

   return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();

 };

 console.log(nextDay(input));
