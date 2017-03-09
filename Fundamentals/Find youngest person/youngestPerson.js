/*
 * Write a JavaScript function findYoungestPerson(array) that accepts as parameter an array of people, finds the
 * youngest person that has a smartphone and returns his full name. Write a JS program youngestPerson.js to execute
 * your function for the below examples and print the result at the console.
 */

 let people = [
{ firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
{ firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
{ firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
{ firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
 ];

 const findYoungestPerson = (array) => {
   let result = {age: Number.MAX_VALUE};

   array.forEach((person) => {
     if (person.hasSmartphone && person.age < result.age) {
       result = person;
     }
   });

   return `The youngest person is ${result.firstname} ${result.lastname}`; 
 };

 console.log(findYoungestPerson(people));