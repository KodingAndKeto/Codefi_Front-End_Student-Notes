// * ========== HTML Element Selectors ========== * \\
const crazyButton = document.querySelector(".crazy-button");
const crazyButton = document.querySelector("crazy.button2");
// * ========== Function Declarations ========== * \\
// FUNCTION: TSK
function goBtnWild(){
    const offsetTop = Math.random() * (window.innerHeight - crazyButton.clientHeight);
    const offsetLeft = Math.random() * (window.innerWidth - crazyButton.clientWidth);

    crazyButton.style.top = offsetTop + "px";
    crazyButton.style.left = offsetLeft + "px";
    
    
}

function goBtnWildAgain(){
    const offsetTop = Math.random() * (window.innerHeight - crazyButton2.clientHeight);
    const offsetLeft = Math.random() * (window.innerWidth - crazyButton2.clientWidth);

    crazyButton2.style.top = offsetTop + "px";
    crazyButton2.style.left = offsetLeft + "px";
}
    
// * ========== Event Listeners ========== * \\
// EVENT LISTENER: TSK
crazyButton.addEventListener("mouseenter",goBtnWild);
crazyButton2.addEventListener("mouseenter",goBtnWild);