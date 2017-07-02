/*
 * You are tasked to count the number of words in a text using an object as an associative array, any combination of
 * letters, digits and _ (underscore) should be counted as a word. The words should be stored in the object as
 * properties - the key being the word and the value being the amount of times the word is contained in the text.
 * The input comes as an array of strings containing one entry - the text whose words should be counted. The text may
 * consist of more than one sentence.
 * The output should be printed on the console - the JSON representation of the object containing the words.
 */

 let input = [`Far too slow, you're far too slow.`];
 let input2 = [`JS devs use Node.js for server-side JS.-- JS for devs`]; 


 const countWords = inputLines => {

   let wordsCount = {};
   let text = inputLines.join('\n');
   let words = text
     .split(/[^A-Za-z0-9_]+/)
     .filter(word => word !== '');

   for (let word of words) {

     if (wordsCount[word]) {
       wordsCount[word]++;
     } else {
       wordsCount[word] = 1;
     }
   }
   return JSON.stringify(wordsCount);
 };

 console.log(countWords(input));
// Output: {"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}

 console.log(countWords(input2));
 //Output: {"JS":3,"devs":2,"use":1,"Node":1,"js":1,"for":2,"server":1,"side":1}