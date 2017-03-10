/*
 * Write a JavaScript function removeItem(value) that accept as parameter a number or string. The function should
 * remove all elements with the given value from an array. Attach the function to the Array type. You may need to
 * read about prototypes in JavaScript and how to attach methods to object types. You should return as a result the
 * modified array. Write a sample program to demonstrate that your function works correctly.
 */

 let arr1 = [ 1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
 let arr2 = ['hi', 'bye', 'hello'];

 


 console.log(arr1.removeItem(1));
 //OUTPUT: [2, 4, 3, 4, 111, 3, 2, '1']

 console.log(arr2.removeItem('bye'));
 //OUTPUT: ['hi', 'hello']