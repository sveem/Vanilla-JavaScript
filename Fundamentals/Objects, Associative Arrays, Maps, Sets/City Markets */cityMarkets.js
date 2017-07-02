/*
 * You have been tasked to follow the sales of products in the different towns. For every town you need to keep track
 * of all the products sold, and for every product, the amount of total income.
 *
 * The input comes as array of strings. Each element will represent data about a product and its sales. The format of
 * input is:
 * {town} -> {product} -> {amountOfSales} : {priceForOneUnit}
 *
 * The town and product are both strings. The amount of sales and price for one unit will be numbers. Store all towns,
 * for every town, store its products, and for every product, its amount of total income. The total income is calculated
 * with the following formula - amount of sales * price for one unit. If you receive as input a town you already have,
 * you should just add the new product to it.
 *
 * As output you must print every town, its products and their total income.
 * The order of output for each of those entries is – by order of entrance.
 */


 let data = ['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Samsung -> 200 : 100000', 'Montana -> Cars -> 200000 : 1', 'Montana -> beers -> 20000 : 0.2', 'Montana -> Burgers -> 1000 : 0.3'];

 const cityMarkets = (sales) => {

   let townsWithProducts = new Map();
   let finalPrint = '';
  
   for (let sale of sales) {

     let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
     let [quantity, price] = quantityPrice.split(/\s*:\s*/);
     let income = Number(quantity) * Number(price);
    
     if (!townsWithProducts.has(town)) {
       townsWithProducts.set(town, new Map());
       townsWithProducts.get(town).set(product, income);
     } else {
       if (!townsWithProducts.get(town).has(product)) {
         townsWithProducts.get(town).set(product, income);
       } else {
         townsWithProducts.get(town).set(product, town.get(product) + income);
       }
     }
   }
  
   for (let [index, value] of townsWithProducts) {
     finalPrint += (`Town - ${index}\n`);
     for (let [product, price] of townsWithProducts.get(index)) {
       finalPrint += (`$$$${product} : ${price}\n`);
     }
   }
   return finalPrint;
 };

 console.log(cityMarkets(data));