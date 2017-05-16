/*
 * Write a JS function that adds and removes numbers to/from an array. 
 * You will receive a command which can either be “add” or “remove”.
 * The initial number is 1. Each input command should increase that number, regardless of what it is.
 * Upon receiving an “add” command you should add the current number to your array.
 * Upon receiving the “remove” command you should remove the last entered number, currently existent in the array.
 * The input comes as array of strings. Each element holds a command.
 * The output is the array itself, with each element printed on a new line. In case of an empty array, just print “Empty”.
 */

 let array = ['add', 'add', 'remove', 'add', 'add'];

 const addRemove = input => {
   let result = [];

   for (let i = 0; i < input.length; i++) {
     if (input[i] === 'add') {
       result.push(i + 1);
     }
     if (input[i] === 'remove') {
       result.pop();
     }
   }

   if (result.length === 0) {
     console.log('Empty');
   } else {
     for (let j = 0; j < result.length; j++) {
       console.log(result[j]);
     } 	
   }
 };

 addRemove(array);

 //Output: 1, 4, 5