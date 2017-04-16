/*
 * You will be given a text as a string. 
 * Write a JS function that extracts and prints only the text that’s surrounded by parentheses.
 * The input comes as array of a single string element.
 * The output is printed on the console on a single line, in the form of a comma-separated list.
 */


let input = ['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'];

const extractText = (text) => {

  let words = [];
  let leftIndex = -1;
  text = text.join(' ');

  while (true) {
    leftIndex = text.indexOf('(', leftIndex);
    if (leftIndex < 0) {
      break;
    }

    let rightIndex = text.indexOf(')', leftIndex + 1);
    if (rightIndex < 0) {
      break;
    }

    words.push(text.substring(leftIndex + 1, rightIndex));
    leftIndex = rightIndex + 1;
  }

  return words.join(', ');
};

console.log(extractText(input));