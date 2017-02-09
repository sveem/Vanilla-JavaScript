
const quadraticEquation = (a, b, c) => {
  let temp = (Math.pow(b, 2) - ( 4 * a * c));
  let x1 = (-b + Math.sqrt(temp)) / (2 * a);
  let x2 = (-b - Math.sqrt(temp)) / (2 * a);
  
  if (temp < 0) {
    console.log("There are no real roots");
  } else if (temp === 0) {
    console.log(`X = ${x1}`);
  } else {
    console.log(`X1 = ${x1}\nX2 = ${x2}`);
  }
};

quadraticEquation(2, 5, -3);
quadraticEquation(2, -4, 2);
quadraticEquation(4, 2, 1);