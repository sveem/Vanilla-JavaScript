/*
 * You are given a sequence of text lines, holding small Latin letters. Your task is to reveal all triangles in the text by
 * changing their letters "*". Triangles consist of equal letters in the form of triangle:
 * Triangles can span different sizes: 2 lines, 3 lines, 4 lines, etc. Triangles can overlap (some letters can take part in
 * several triangles).
 *
 * Input
 * The input data comes as array of strings, holding the text lines.
 *
 * Output
 * Print at the console the input data after replacing all triangles by &#39;*&#39;.
 *
 * Constraints
 * -The input will be passed to the first JavaScript function found in your code as array of strings.
 * -Each input line will hold 1…100 Latin letters.
 * -The number of input lines will be in the range [1..100].
 * -Allowed working time: 0.2 seconds. Allowed memory: 16 MB.
 *
 * Hint: to simplify your work, you can reveal only triangles of size &quot;2 lines&quot;, because all bigger triangles consist of
 * several overlapping triangles of size &quot;2 lines&quot;.
 */

let triangle1 = ['abcdexgh', 'bbbdxxxh', 'abcxxxxx'];
let triangle2 = ['aa', 'aaa', 'aaaa', 'aaaaa'];

const revealTriangles = (input) => {
   
  let result = [];
  for (let row = 0; row < input.length; row++) {
    result[row] = input[row].split('');
  }
  
  for (let row = 1; row < input.length; row++) {
    let maxCol = Math.min(
       input[row - 1].length - 2,
       input[row].length - 3);

    for (let col = 0; col <= maxCol; col++) {
      let a = input[row][col];
      let b = input[row][col + 1];
      let c = input[row][col + 2];
      let d = input[row - 1][col + 1];
      if (a === b && b === c & c === d) {
  
        result[row][col] = '*';
        result[row][col + 1] = '*';
        result[row][col + 2] = '*';
        result[row - 1][col + 1] = '*';
      }
    }
  }
 
  for (var row = 0; row < input.length; row++) {
    console.log(result[row].join(''));
  }
};

revealTriangles(triangle1);
revealTriangles(trieable2);
