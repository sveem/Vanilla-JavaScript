/*
 * Write a JavaScript function current-time.js that prints on the console the current time in UTC format. 
 * Execute your file through Node.js. A sample output is given below:
 * Mon, 09 Mar 2016 12:25:12 GMT
 */

const currentTime = () => {
  let date = new Date();
  console.log(date.toUTCString());
  return date.toUTCString();
};

currentTime();