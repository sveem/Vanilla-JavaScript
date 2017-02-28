/*
 * Write a JavaScript function that takes as input an array of two numbers (start and end) and prints at the console a
 * HTML table of 3 columns. The first column should hold a number num, changing from start to end. The second
 * column should hold num*num. The third column should hold "yes" if num is Fibonacci number or "no" otherwise.
 * The table should have header cells titled "Num", "Square"; and "Fib".

 * Input:
 * The input data comes as array of two numbers: start and end. The input data will always be valid and in the format
 * described. There is no need to check it explicitly.

 * Output:
 * Print at the console the above described table in the same format like the examples below. Don't add additional
 * spaces. Whitespace and character casing are important, so please use the same as in the below examples.

 * Constraints:
 * -The input is passed to the first JavaScript function found in your code as array of 2 elements.
 * -The numbers start and end are positive integers in the range [1…1 000 000] and start ≤ end.
 * -Allowed working time for your program: 0.2 seconds.
 * -Allowed memory: 16 MB.
 */

 let array = [2, 6];
 let array1 = [55, 56];

 const fib = (num) => {
   let prev = 0;
   let curr = 1;

   while (prev <= num) {
     if (prev === num) {
       return 'yes';
     }
     curr = prev + curr;
     prev = curr - prev;
   }
   return 'no';
 };

 const buildTable = (input) => {
   let first = input[0];
   let last = input[1];
   console.log('<table>\n<tr><th>Num</th><th>Square</th><th>Fib<th></tr>');

   for (let i = first; i <= last; i++) {
     let temp = i;
     let isFib = fib(temp);
     console.log(`<tr><td>${temp}</td><td>${temp * temp}</td><td>${isFib}</td></tr>`);
   }
   
   return '</table>';
 };

 console.log(buildTable(array));
 console.log(buildTable(array1));