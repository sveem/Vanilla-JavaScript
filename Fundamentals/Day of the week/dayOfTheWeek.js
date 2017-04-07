/*
 * Write a JS function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an
 * error message if the string is not recognized.
 * The input comes as an array with one string element in it.
 * The output should be returned as a result of your program.
 */

 let day1 = 'Monday';
 let day2 = 'Friday';
 let day3 = 'Frabjoyousday';

 const weekday = (input) => {
 
   let week = {
     'Monday': 1,
     'Tuesday': 2,
     'Wednesday': 3,
     'Thursday': 4,
     'Friday': 5,
     'Saturday': 6,
     'Sunday': 7
   };

   return week[input] || 'error';
 };

 console.log(weekday(day1));
 console.log(weekday(day2));
 console.log(weekday(day3));
