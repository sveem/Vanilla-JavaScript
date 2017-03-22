/*
 * Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.
 * The input comes as array of two string elements, each holding a number. 
 * The first element is the cone’s radius and the second is its height.
 * The output should be printed to the console on a new line for every result.
 */

 let parameters = ['3', '5'];
 let parameters1 = ['3.3', '7.8'];

 const findCone = (input) => {
   let radius = Number(input[0]);
   let height = Number(input[1]);
    
   let volume = Math.PI * Math.pow(radius, 2) * (height / 3);
   let area = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
   volume = Number(volume.toFixed(4));
   area = Number(area.toFixed(4));
   return `volume = ${volume}\narea = ${Number(area)}`;
 };
 
 console.log(findCone(parameters));
 console.log(findCone(parameters1));



