import { getStartImagePath, getCoverPageInfo } from './util.js';

const title         = document.querySelector(".title");
const subtitle      = document.querySelector(".subtitle");
const start_image   = document.querySelector(".responsive-image")
const start_button  = document.querySelector(".start-button")
const description   = document.querySelector(".description")

function setupInformation(test_info, test_id, language) {
    title.innerText = test_info.title
    subtitle.innerText = test_info.subtitle
    description.innerText = test_info.description
    start_image.src = getStartImagePath(test_id, language)
}

function addEventStartButton() {
    start_button.addEventListener("click", function(e){
        console.log("Go to next page")
    });
}

function init() {
    const test_id = 1 // FIX ME
    const language = 'kor'

    const test_info = getCoverPageInfo(test_id, language)

    setupInformation(test_info, test_id, language)
    addEventStartButton()
}

init();
