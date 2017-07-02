/*
 * You are tasked to count the number of words in a text using a Map, any combination of letters, digits and _
 * (underscore) should be counted as a word. The words should be stored in a Map - the key being the word and the
 * value being the amount of times the word is contained in the text. The matching should be case insensitive. Print
 * the words in a sorted order.
 *
 * The input comes as an array of strings containing one entry - the text whose words should be counted. The text may
 * consist of more than one sentence.
 *
 * The output should be printed on the console - print each word in the map in the format "'<word>'-><count> times"
 * each on a new line.
 */

 let input = [`Far too slow, you're far too slow.`];
 let input2 = ['JS devs use Node.js for server-side JS.-- JS for devs']; 
 let input3 = ['JS and Node.js', 'JS again and again', 'Oh, JS?'];

 const countWordsWithMap = inputLines => {
 
   let wordsCount = new Map ();
   let words = inputLines
     .join('\n')
     .toLowerCase()
     .split(/[^A-Za-z0-9_]+/)
     .filter(word => word !== '');

   for (let word of words) {
     if (wordsCount.has(word)) {
       wordsCount.set(word, wordsCount.get(word) + 1);
     } else {
       wordsCount.set(word, 1);
     }
   }

   let allWords = Array
     .from(wordsCount.keys())
     .sort();

   allWords.forEach(word => console.log(`'${word}' -> ${wordsCount.get(word)} times`));
 };

 console.log(countWordsWithMap(input));
 console.log(countWordsWithMap(input2));
