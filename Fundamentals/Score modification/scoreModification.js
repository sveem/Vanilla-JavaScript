/*
 * You are given an array of numbers. Your tasks are to first filter out all valid exam scores (between 0 and 400) and
 * afterwards scale them downwards by removing 20% out of each score. Finally you should print out the changed
 * scores sorted in ascending order.
*/


let arr = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

const scoreModification = (arr) => {
  let result = arr.filter((el) => {
    return (el > 0 && el < 400);
  }).map((num) => {
    return num - ((num * 20) / 100);
  }).sort((a, b) => a > b );
  return result;
};
console.log(scoreModification(arr));
