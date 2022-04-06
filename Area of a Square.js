/* This code wars challenge is written terribly
You are given and arc length and are asked to determine the area of a square.
How to solve the Math:
1. Arc length formula: 

        Arclength = (theta/360)2*Pi*r
   
2. solve the Equation for radius which will equal one side of the square

    r = ((360 * Arclength)/(theta * 2 * Pi))
  
3. reduce
    360 / theta(90) = 4

    r = 4 / ( 2 * Pi)

4. the code:
*/

function squareArea(A) {
    let radius = ( 4 * A ) / ( 2 * Math.PI);
    let area = Math.pow(radius, 2)
    return Math.round( area * 100 ) / 100;
}
console.log(squareArea(2))

// I did not include the best practices code because mine has one less line of code than the one on code wars