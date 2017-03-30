
/*
 * You are given a string composed of only 1s, 0s, and Xs.
 * Write a program that will print out every possible combination where you replace the X with  both 0 and 1.
 * Examples: 
 * 'X0' => 00, 10
 * '10X10X0' => 1001000, 1001010, 1011000, 1011010 
 */


let str1 = 'X0';
let str2 = '10X10X0';

const permutation = (string) => {
  
  let index = string.indexOf('X');
  let result, a, b;

  if (index === -1) {
    return string;
  }

  a = string.slice(0, index);
  b = string.slice(index + 1);

  result = [].concat (
    permutation(a + '0' + b),
    permutation(a + '1' + b)
 );

  result.forEach((number) => {
    console.log(number);	
  });
  return;
};

permutation(str1);
permutation(str2);