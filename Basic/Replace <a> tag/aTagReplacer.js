/* 
 * Write a JavaScript function replaceATag(str) that replaces in a HTML document given as string all the tags <a
 * href=" ">…</a> with corresponding tags [URL=…]…/URL]. Write JS program aTagReplacer.js that invokes your
 * function with the sample input data below and prints the output at the console.
 */

let input = "<ul> \n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>";

const replaceATag = (str) => {
  let aTagStart = str.replace("<a", "[URL");
  let aTagEnd = aTagStart.replace("</a>", "[/URL]");
  let index = aTagEnd.search(/>\S/);
  let result = aTagEnd.replace(aTagEnd[index], "]");
  return result;
};

console.log(replaceATag(input));


