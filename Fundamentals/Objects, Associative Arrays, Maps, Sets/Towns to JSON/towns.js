/*
 * You’re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each
 * string represents a row of a table, with values on the row encompassed by pipes '|' and optionally spaces. The
 * table will consist of exactly 3 columns “Town”, “Latitude” and “Longitude”. The latitude and longitude columns will
 * always contain valid numbers. Check the examples to get a better understanding of your task.
 * The input comes as an array of strings - the first string contains the table’s headings, each next string is a row from
 * the table.
 * The output should be printed on the console - for each entry row in the input print the object representing it.
 */

 let data = [
   '| Town | Latitude | Longitude |',
   '| Sofia | 42.696552 | 23.32601 |',
   '| Beijing | 39.913818 | 116.363625 |'
 ];

 const townsToJSON = towns => {
   let result = [];

   for (let town of towns.slice(1)) {
     let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);

     let townObj = { 
       Town: townName, 
       Latitude: Number(lat), 
       Longitude: Number(lng) 
     };
     result.push(townObj);
   }
   return JSON.stringify(result);
 };

 console.log(townsToJSON(data));