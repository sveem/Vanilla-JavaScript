/*
 * You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing
 * an array of objects, the table’s headings should be equal to the objects’ keys, while each object’s values should be
 * a new entry in the table. Any text values in an object should be escaped, in order to avoid introducing dangerous
 * code into the HTML.
 * Object’s keys will always be the same.
 * The input comes as an array of strings containing a single string - the array of objects.
 * The output should be printed on the console - for each entry row in the input print the object representing it.
 */


let data = ['[{"Name":"Tomatoes & Chips", "Price" :2.35},{"Name":"J&B Chocolate","Price":0.96}]'];

const json2Table = input => {

  let html = '<table>\n';
  let data = JSON.parse(input);
  
  function htmlEscape(text) {
    text = '' + text;
    let tokensToReplace = {'<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&#39;', '"': '&quot;'};
    return text.replace(/[<>&'"]/g, m => tokensToReplace[m]);
  }

  html += '  <tr>';
    
  for (let keys of Object.keys(data[0])) {
    html += `<th>${keys}</th>`;
  }
    
  html += '</tr>\n';

  for (let obj of data) {
    html += '  <tr>';
    for (let value of Object.keys(obj)) {
      html += `<td>${htmlEscape(obj[value])}</td>`;
    }
      
    html += '</tr>\n';
  }

  html += '</table>';

  return html;
};

console.log(json2Table(data));

