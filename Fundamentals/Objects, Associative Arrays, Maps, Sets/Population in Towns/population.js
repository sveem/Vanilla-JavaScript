/*
 * You have been tasked to create a register for different towns and their population.
 * The input comes as array of strings. Each element will contain data for a town and its population in the following
 * format: “{townName} <-> {townPopulation}”
 * If you receive the same town twice, you should add the given population to the current one.
 * As output, you must print all the towns, and their population.
 */

let data = [
  'Sofia <-> 1200000', 
  'Montana <-> 20000', 
  'New York <-> 10000000', 
  'Washington <-> 2345000', 
  'Las Vegas <-> 1000000'];
  

let data1 = [
  'Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000'];

const populationInTowns = (dataRows) => {
  let total = new Map ();
    
  for (let dataRow of dataRows) {
    let [town, population] = dataRow.split(/\s*<->\s*/);
    population = Number(population);
  
    if (total.has(town)) {
      total.set(town, total.get(town) + population);
    } else {
      total.set(town, population);
    }
  }

  for (let [town, sum] of total) {
    console.log(town + ' : ' + sum);
  }
};
  
populationInTowns(data);
populationInTowns(data1);