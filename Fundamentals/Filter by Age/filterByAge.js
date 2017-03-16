/*
 * Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.
 * The input comes as array of string elements. The first element is the minimum age. 
 * The second and third elements are the name and age of the first person and the fourth and fifth elements – the name and age of the second person. 
 * The three age parameters need to be parsed as numbers.
 * The output should be printed to the console.
 */

let input1 = ['12', 'Ivan', '15', 'Asen', '9'];
let input2 = ['19', 'Pesho', '119', 'Gosho', '20'];

const filterByAge = (array) => {
  let minAge = array[0];
  let person1 = {};
  let person2 = {};

  person1.name = array[1];
  person1.age = Number(array[2]);
  person2.name = array[3];
  person2.age = Number(array[4]);

  if (person1.age >= minAge) {
    console.log(person1);
  }

  if (person2.age >= minAge) {
    console.log(person2);
  }

};

console.log(filterByAge(input1));
console.log(filterByAge(input2));