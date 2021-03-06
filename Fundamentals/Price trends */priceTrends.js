/*
 * You are given a list of prices. Your task is to print them in a HTML table: the first column holds a price; the second
 * column holds a trend. The trend is either fixed (no change) or moving up or moving down. Fixed is the trend of the
 * first price and when the previous price is the same as the current price (after rounding). Moving up is when the
 * current price is greater than the previous price (after rounding). Moving down is when the current price is less than
 * the previous price (after rounding). All numbers are rounded to 2 digits after the decimal point. See the examples
 * below for better understanding.
 
 * Input:
 * The input is passed to the first JavaScript function found in your code as array of strings holding the input numbers.
 * The input data will always be valid and in the format described. There is no need to check it explicitly.
 
 * Output:
 * Print at the console the prices / trends HTML table following the examples below. The table has a fixed header
 * defining 2 columns: Price and Trend. The prices column should hold the price, rounded to 2 decimal places. The
 * trend is calculated after rounding (with 2 decimal places) and can be &quot;fixed&quot;, &quot;up&quot; or &quot;down&quot;. Whitespace and
 * character casing are important, so please use the same as in the below examples.
 
 * Constraints:
 * -The count of input numbers is in the range [0…1 000].
 * -All input numbers are in the range [0…1 000 000].
 * -Allowed working time: 0.2 seconds. Allowed memory: 16 MB.
 */


let price1 = ['50', '60'];
let price2 = [
  '36.333', 
  '36.5', 
  '37.019', 
  '35.4', 
  '35', 
  '35.001', 
  '36.225'
];

const priceTrends = (input) => {
  let temp, currentPrice;
  let priceArray = input.map(el => Number(el).toFixed(2));
 
  console.log('<table>');
  console.log('<tr><th>Price</th><th>Trend</th></tr></td></tr>');
  
  for (let i = 0; i < priceArray.length; i++) {
    currentPrice = priceArray[i];

    if (priceArray[i] > priceArray[i - 1]) {
      temp = 'up.png';
    } else if (priceArray[i] < priceArray[i - 1]) {
      temp = 'down.png';
    } else {
      temp = 'fixed.png';
    }
    console.log(`<tr><td>${currentPrice}</td><td><img src="${temp}"</td></tr>`);
  }
  return '</table>';
};

console.log(priceTrends(price1));
console.log(priceTrends(price2));