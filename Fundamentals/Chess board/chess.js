/*
 * Write a JS function to print a chessboard of size n X n. See the example for more information.
 * The input comes as array of one string element, holding the number n.
 * The output should be returned as a result of your function in the form of a string.
 */

let input = ['3'];

const chess = (rows) => {
  let num = Number(rows[0]);
  let html = `<div class='chessboard'>\n`;
  let counter = 0;
  
  for (let i = 1; i <= num; i++) {
    html += '  <div>\n';
    
    for (let j = 1; j <= num; j++) {
      if (counter % 2 === 0 ) {
        html += `    <span class='black'></span>\n`;
      } else {
        html += `    <span class='white'></span>\n`;
      } 
      counter++;
    }
    html += '  </div>\n';
  }
  html += '</div>';
  return html;
};

console.log(chess(input));