/*
 * Write a JS function to check whether a year is leap. 
 * Leap years are either divisible by 4 but not by 100 or are divisible by 400.
 * The input comes as array of one string element, holding a number.
 * The output should be printed to the console. Print yes if the year is leap and no otherwise.
 */

 let input1 = ['1999'];
 let input2 = ['2000'];
 let input3 = ['1900'];

 const leapYear = (years) => {
   let year = years.map(Number);
   return year % 4 === 0 && year % 400 === 0 ? 'yes' : 'no';
 };

 console.log(leapYear(input1));
 console.log(leapYear(input2));
 console.log(leapYear(input3));