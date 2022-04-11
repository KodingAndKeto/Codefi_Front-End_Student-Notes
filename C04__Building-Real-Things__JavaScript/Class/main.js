// Create a button that changes the background color
//Select Button from HTML
// Button should run code when clicked
// Function should change the background color of the body
// funtion should also change the text colorcolor should be randomized


const myBtn = document.querySelector(".btn");

function changeColors(){
    document.body.style.backgroundColor = "blue";
}

myBtn.addEventListener("click",changeColors)


