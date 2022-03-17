// HTML Element Selectors 
const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");

const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");

// GLOBAL VARIABLES
const allLinks = JSON.parse(localStorage.getItem("link_list")) || [];

const BASE_URL = "https://opengraph.io/api/1.1/site";
const API_KEY = "fdcc299a-6adc-43d0-ac90-1674c1cbadf5";

// FUNCTION DECLARATIONS 
// FUNCTION: Adds the "focus-form" class on the body when the form is in focus
function focusInput(){
    body.classList.add("focus-form");
}

// FUNCTION: Removes the "focus-form" class on the body when the form is out of focus 
function endFocus(){
    if(body.classList.contatins("focus-form"))
    body.classList.remove("focus-form");
}

// FUNCTION: Creates a new link when a URL is submitted 
async function createLink(e){
    // prevents the form from submitting 
    e.preventDefault();

    //Validation 
    if (!input.value)return;

    //Grab data from the websites metadata
    const link = await fetchURLMetaData(input.value);

    // Add the link to the linkList 
    allLinks.push(link);

    //Repopulate HTML List
    populateLinkList(allLinks);

    //Save List to Local Storage 
    saveLinkListToLocalStorage(allLinks);

    //Reset the input box
    form.reset();
}

    //FUNCTION: Removes a new Link when a link is deleted
    function remove