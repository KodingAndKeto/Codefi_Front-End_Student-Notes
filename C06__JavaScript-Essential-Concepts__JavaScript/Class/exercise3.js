// let initialValue = 0
// let sum = [{x:1}, {x:2}, {x:3}].reduce(function (previousValue, currentValue){
//     return previousValue + currentValue.x
// }, initialValue)

// console.log(sum)

// let initialValue = 0
// let sum = ([[1,2],[1,1],[2,3]]).reduce(function (x1, y1){
//     return x1 * y1.x
// }, initialValue)

// console.log(sum)

//FUNCTION DECLARATION 
function getSomeOfProducts(nestedArr){
    const firstProduct = nestedArr[0][0] * nestedArr[0][1]; 
    const secondProduct = nestedArr[1][0] * nestedArr [1][1];
    const thirdProduct = nestedArr[2][0] * nestedArr[2][1];

    return firstProduct + secondProduct + thirdProduct; 



}

//FUNCTION CALL

const myProduct = getSomeOfProducts([[1,2],[1,1],[2,3]])

console.log("myProduct:", myProduct);
