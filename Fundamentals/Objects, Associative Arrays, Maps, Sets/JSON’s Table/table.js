/*
 * JSON’s Table is a magical table which turns JSON data into an HTML table. You will be given JSON strings holding
 * data about employees, including their name, position and salary. You need to parse that data into objects, and
 * create an HTML table which holds the data for each employee on a different row, as columns.
 *
 * The name and position of the employee are strings, the salary is a number.
 *
 * The input comes as array of strings. Each element is a JSON string which represents the data for a certain employee.
 *
 * The output is the HTML code of a table which holds the data exactly as explained above. Check the examples for
 * more info.
 */

 let data = [
   '{"name":"Pesho","position":"Investor","salary":100000}', 
   '{"name":"Teo","position":"Lecturer","salary":1000}', 
   '{"name":"Georgi","position":"Lecturer","salary":1000}'];

 const jsonToTable = input => {
    
   let table = '<table>\n';
   let newInput = input.map(el => JSON.parse(el));
    
   for (let obj of newInput) {
     let name = obj.name;
     let position = obj.position;
     let salary = obj.salary;
      
     table += '  <tr>\n';
     table += `    <td>${name}<td>\n`;
     table += `    <td>${position}<td>\n`;
     table += `    <td>${salary}<td>\n`;
     table += '  <tr>\n';
   }
   return table += '</table>';
 };
  
 console.log(jsonToTable(data));