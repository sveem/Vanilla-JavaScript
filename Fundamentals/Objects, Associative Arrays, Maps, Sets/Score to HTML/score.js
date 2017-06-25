/*
 * You are given a JSON string representing an array of objects, parse the JSON and create a table using the supplied
 * objects. The table should have 2 columns "name" and "score", each object in the array will also have these keys.
 * Any text elements must also be escaped in order to ensure no dangerous code can be passed.
 * You can either write the HTML escape function yourself or use the one from the Strings and Regular Expressions Lab.
 * The input comes as an array of strings containing a single string - the array of objects as a JSON.
 * The output should be printed on the console - a table with 2 columns - "name" and "score", containing the values
 * from the objects as rows.
 */

 let text = '[{"name": "Pesho & Kiro","score": 479},{"name": "Gosho, Maria & Viki", "score": 205}]';

 let text2 = '[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]';

 const scoreToHTMLTable = (input) => {
    
   let scoreArr = JSON.parse(input);
   let html = '<table>\n';
   html += '  <tr><th>name</th><th>score</th>\n';

   function htmlEscape(someText) {

     let replaced = new String(someText);

     replaced = replaced.split('&').join('&amp;');
     replaced = replaced.split('<').join('&lt;');
     replaced = replaced.split('>').join('&gt;');
     replaced = replaced.split('"').join('&quot;');
     replaced = replaced.split('\'').join('&#39;');
     return replaced;
   }

   for (let score of scoreArr) {
     
     html += `  <tr>`;
     html += `<td>${htmlEscape(score['name'])}</td>`;
     html += `<td>${htmlEscape(score['score'])}</td>`;
     html += `</tr>\n`;
   }
   return html + '</table>';
 };

 console.log(scoreToHTMLTable(text));
 console.log(scoreToHTMLTable(text2));