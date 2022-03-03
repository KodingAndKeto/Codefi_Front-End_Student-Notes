// let initialValue = 0
// let sum = [{x:1}, {x:2}, {x:3}].reduce(function (previousValue, currentValue){
//     return previousValue + currentValue.x
// }, initialValue)

// console.log(sum)

let initialValue = 0
let sum = ([[1,2],[1,1],[2,3]]).reduce(function (x1, y1){
    return x1 * y1.x
}, initialValue)

console.log(sum)