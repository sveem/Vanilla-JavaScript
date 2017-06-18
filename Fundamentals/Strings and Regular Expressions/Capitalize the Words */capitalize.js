/*
 * Write a JS function that capitalizes the given words. 
 * You need to make every word’s first letter – uppercase and all other letters – lowercase.
 * The input comes as a single string, containing words, separated by a space.
 * The output is the same string, however with all of its words capitalized.
 * Note: The words can contain any ASCII character. You need to affect only the letters.
 */

 let input = 'Capitalize these words';
 let input1 = 'Was that Easy? tRY thIs onE for SiZe!';

 const capitalize = data => {
 
   let string = data.toLowerCase().split(' ');
   let storage = [];

   string.forEach(el => {
     let temp = el.substr(0, 1).toUpperCase() + 
     el.substr(1, el.length);
     storage.push(temp);
   });

   return storage.join(' ');
 };

 console.log(capitalize(input));
 //Output: 'Capitalize These Words'
 console.log(capitalize(input1));
 //Output: 'Was That Easy? Try This One For Size!'
