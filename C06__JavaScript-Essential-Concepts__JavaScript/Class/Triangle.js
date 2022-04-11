// const side1 = 5; 
// const side2 = 6; 
// const side3 = 7; 
// const perimeter = (side1 + side2 + side3)/2;
// const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(area);

//FUNCTION DECLERATION
// function calculateAreaOfTriangle(base, height){
//     const area = .5 * base * height;
//     return area;
// }

//FUNCTION DECLARATION 
const calculateAreaOfTriangle = (base, height) => 0.5 *base *height;


//FUNCTION CALLS
const triangleOne = calculateAreaOfTriangle(10,5);
console.log("triangleOne:", triangleOne);

const triangleTwo = calculateAreaOfTriangle(12, 12);
console.log("triangleTwo:", triangleTwo);

const triangleThree = calculateAreaOfTriangle(15, 25);
console.log("triangleThree:", triangleThree);
