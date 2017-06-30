/*
 * You’re tasked with calculating the total sum of income for a number of Towns. You will receive an array of strings
 * representing towns and their incomes, every even index will be a town and every odd index will be an income
 * belonging to that town. Create an object that will hold all the towns as keys and their total income (the sum of their
 * incomes) as values to those keys and print it as a JSON.
 * The input comes as an array of strings - each even index is the name of a town and each odd index is an income
 * belonging to that town.
 * The output should be printed on the console - JSON representation of the object containing all towns and their total
 * incomes.
 */

let data = ['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'];

const sumByTown = (input) => {

  let result = {};

  for (let i = 0; i < input.length; i + 2) {
    let town = input[i];
    let sum = Number(input[i + 1]);

    if (result[town] === undefined) {
      result[town] = sum;
    } else {
      result[town] += sum;
    }
  }
  return JSON.stringify(result);
};

console.log(sumByTown(data));
//Output: {"Sofia": 25, "Varna": 7}