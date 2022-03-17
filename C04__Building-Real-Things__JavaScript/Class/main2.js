// create a function that returns the number of true values in an array


//*~~~STEPS*~~~\\

//1. create a function
//2. function should accept array as an argument
//3. function should return the number of true values in the array
//bonus: function should return 0 with empty array


// CODE \\
function countTrue(array){
//Store the total true count
let totalTrueCount = 0;
//Loop over the array
for(let boolean of array){
    //Add to the total count if the current item is True    
    if(boolean ===true)totalTrueCount++
}

return totalTrueCount
}

// Test Cases \\ 

const expectTwo = contTrue([flase,true,false,true]);