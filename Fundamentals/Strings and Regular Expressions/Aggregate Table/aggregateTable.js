/*
 * You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|). 
 * Write a JS function that extracts the names of all towns and produces a sum of the incomes. 
 * Note that splitting may result in empty string elements and the number of spaces may be different in every table.
 * The input comes as array of string elements. Each element is one row in a formatted table.
 * The output is printed on the console on two lines. On the first line, print a comma-separated list of all towns and on
 * the second, the sum of all incomes.
 */

let input = 
  [ 
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
  ];

const aggregateTable = (array) => {

  let cities = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    
    let char = array[i].split('|');
    let city = char[1].toString().trim();
    cities.push(city);
    
    let amount = char[2].toString().replace(/ /g, '');
    sum += Number(amount);
  }
  console.log(cities.join(', '));
  console.log(sum);
};

aggregateTable(input);