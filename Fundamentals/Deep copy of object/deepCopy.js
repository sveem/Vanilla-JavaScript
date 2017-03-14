/*
 * Write a JavaScript function clone(obj) that accepts as parameter an object of reference type. 
 * The function should return a deep copy of the object. 
 * Write a second function compareObjects(obj, objCopy) that compare the two objects by reference (==) and print on the console the output given below. 
 * Read in Internet about "deep copy" of an object and how to create it.
 */

const clone = (obj) => {
  let stringified = JSON.stringify(obj);
  let copy = JSON.parse(stringified);
  return copy;
};

const compareObjects = (obj, objCopy) => {
  let compare = (obj === objCopy);
  return `a === b --> ${compare}`;
};

let a = {name: 'Pesho', age: 21};
let b = clone(a); //a deep copy
console.log(compareObjects(a, b));
//-------------------------------->
a = {name: 'Pesho', age: 21};
b = a; //not a deep copy
console.log(compareObjects(a, b));

