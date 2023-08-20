import { getTestData, getStartImagePath } from './util.js';

const title         = document.querySelector(".title");
const subtitle      = document.querySelector(".subtitle");
const start_image   = document.querySelector(".responsive-image")
const start_button  = document.querySelector(".start-button")
const description   = document.querySelector(".description")

function setupInformation(test_info, test_name) {
    title.innerText = test_info.title
    subtitle.innerText = test_info.subtitle
    description.innerText = test_info.description
    start_image.src = getStartImagePath(test_name)
}

function addEventStartButton() {
    start_button.addEventListener("click", function(e){
        console.log("Go to next page")    
    });
}

function init() {
    const test_name = "love" // FIX ME
    const test_info = getTestData(test_name)

    setupInformation(test_info, test_name)
    addEventStartButton()
}

init();
