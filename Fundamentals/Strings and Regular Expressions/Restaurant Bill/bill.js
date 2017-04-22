/*
 * You are tasked to write a JS function that receives an array of purchases and their prices and prints all your
 * purchases and their total sum.
 * The input comes as an array of string elements – the elements on even indexes (0, 2, 4…) are the product names,
 * while the elements on odd indexes (1, 3, 5…) are the corresponding prices.
 * The output should be printed on the console - a single sentence containing all products and their total sum in the
 * format “You purchased {all products separated by comma + space} for a total sum of {total sum of products}”.
 */

 let input1 = ['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69'];
 let input2 = ['Cola', '1.35', 'Pancakes', '2.88'];

 const bill = input => {
 
   let goods = [];
   let sum = 0;

   input.forEach((el, index) => {
     index % 2 === 0 
     ? goods.push(el)
     : sum += Number(el);
   });

   return `You purchased ${goods.join(', ')} for a total sum of ${sum}`;

 };

 console.log(bill(input1));
 console.log(bill(input2));