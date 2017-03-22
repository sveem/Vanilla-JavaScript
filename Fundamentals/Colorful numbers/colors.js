/*
 * Write a JS function to print the numbers from 1 to n. 
 * Return a string holding HTML list with the odd lines in blue and even lines in green. See the example for more information. 
 * The input comes as array of one string element, holding the number n.
 * The output should be returned as a result of your function in the form of a string.
 */

 const printColors = (input) => {

   let number = Number(input[0]);
   let html = '<ul>\n';
   
   for (let i = 1; i <= number; i++) {
     if (i % 2 === 0) {
       html += `  <li><span style='color: blue'>` + i + `</span></li>\n`;
     } else {
       html += `  <li><span style='color: green'>` + i + `</span></li>\n`;
     }
   }
   html += '</ul>';
   return html;
 };

 console.log(printColors(['10']));