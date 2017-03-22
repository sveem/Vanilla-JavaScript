/*
 * Write a JS function to print 'fruit', 'vegetable' or unknown depending on the input string.
 * Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach.
 * Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley.
 * All others are unknown.
 * The input comes as array of one string element, the name of the fruit.
 * The output should be printed to the console.
 */

const fOrV = (input) => {

  let fruitAndVegetables = {
    banana: 'fruit',
    apple: 'fruit',
    kiwi: 'fruit',
    cherry: 'fruit',
    lemon: 'fruit',
    grapes: 'fruit',
    peach: 'fruit',
    tomato: 'vegetable',
    cucumber: 'vegetable',
    pepper: 'vegetable',
    onion: 'vegetable',
    garlic: 'vegetable',
    parsley: 'vegetable'
  }; 

  let fv = input[0];
  return fruitAndVegetables[fv] || 'unknown';
};

console.log(fOrV(['banana']));
console.log(fOrV(['cucumber']));
console.log(fOrV(['pizza']));
