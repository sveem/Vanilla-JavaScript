/*
 * Write a JS function that counts how many times a string occurs in a given text. Overlapping strings are allowed.
 * The input comes as array of two strings. The first element is the target string and the second element is the text in
 * which to search for occurrences.
 * The output should be a number, printed on the console.
 */

 let input1 = ['the', 'The quick brown fox jumps over the lay dog.'];
 let input2 = ['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'];

 const countOccurrences = (data) => {
  
   let string = data[0];
   let text = data[1];
   let founded = new RegExp(string, 'g');

   let result = text.match(founded);

   return result.length;
 };

 console.log(countOccurrences(input1));
 //Output: 1
 console.log(countOccurrences(input2));
 //Output: 7