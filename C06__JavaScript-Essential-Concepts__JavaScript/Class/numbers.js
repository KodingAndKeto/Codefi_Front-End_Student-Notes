//range function

function range(start, end, increment){

        //Creat the result array 

        var result = [];

        // test to see if we have an increment, otherwise set it to 1
        if (increment == undefined)
        increment = 1;

        // calculate the number of times to loop (This is because you might be going up or down with your increment)
        numLoops = Math.abs((end - start)/ increment) +1; 

        // loop that many times
        for (var i = 0; i < numLoops; i ++){

            // add (push) the value of start to the Array
            result.push(start);

            // increment the value of start
            start += increment; 

        }
        //return the array with all the things in it
        return result;
}

function sum(numArray) {
    //set a variable to hold the sum
    var arrayTotal = 0;

    //See how many numbers are in the array 
    numLoops = numArray.length;

    //loop that many times
    for(var i = 0; i < numLoops; i++){
        //add the number at the index to the sum
        arrayTotal += numArray[i]; 
    }

    //return the sum
    return arrayTotal;
}

console.log(range(1,10));
// -> [1,2,3,4,5,6,7,8,9,19]

console.log(range(2,8));

console.log(range(10, 20));

console.log(range (17, 24));