/*
 * Write a JavaScript function calcCylinderVol(arr) that accepts the following parameters: radius and the height of a
 * straight circular cylinder. The function calculates the volume of the cylinder. Write JS program cylinderVol.js that
 * calculates the volume of a few cylinders. The result should be printed on the console. Run the program through
 * Node.js.
 */

 const calCylinderVol = (arr) => {
   let radius = arr[0];
   let height = arr[1];
   let volume = Math.PI * (Math.pow(radius, 2) * height);
   return Number(volume.toFixed(3));
 };

 console.log(calCylinderVol([2, 4]));
 console.log(calCylinderVol([5, 8]));
 console.log(calCylinderVol([12, 3]));