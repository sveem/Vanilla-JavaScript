/*
 * Write a HTML page (with text field, button, and paragraph). Write JS program calcExpression.js that calculates any
 * expression put in the text field and prints it in the paragraph. Link the JS file to the HTML file.
 */

const getInput = () =>{
  let input = document.getElementById("input").value;
  let calculate = eval(input);
  let output = document.getElementById("output").innerHTML = calculate;
};

