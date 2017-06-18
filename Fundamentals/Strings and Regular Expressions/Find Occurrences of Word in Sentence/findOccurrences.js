/*
 * Write a JS function that finds, how many times a given word, is used in a given sentence.
 * Note that letter case does not matter – it is case-insensitive.
 * The input comes as array of strings. The input will consist of exactly 2 strings. 
 * The first one will be the sentence, and the second one – the word.
 * The output is a single number indicating the amount of times the sentence contains the word.
 */

 let input = ['The waterfall was so high, that the child couldn’t see its peak.', 'the'];
 let input1 = ['How do you plan on achieving that? How? How can you even think of that?', 'how'];
 let input2 = ['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'];

 const findOccurrences = data => {
   
   let sentence = data[0].toLowerCase();
   let word = data[1].toLowerCase();

   let exactMatch = `\\b${word}\\b`;
   let result = sentence.match(new RegExp(exactMatch, 'g'));

   return result.length;
 };

 console.log(findOccurrences(input));
 //Output: 2
 console.log(findOccurrences(input1));
 //Output: 3
 console.log(findOccurrences(input2));
 //Output: 1
