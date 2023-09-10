import { getStartImagePath, getCoverPageInfo } from './util.js';

const title         = document.querySelector(".title");
const subtitle      = document.querySelector(".subtitle");
const start_image   = document.querySelector(".responsive-image")
const start_button  = document.querySelector(".start-button")
const description   = document.querySelector(".description")


var test_id = null
var lan = null

function setupInformation(test_info, test_id, lan) {
    title.innerText = test_info.title
    subtitle.innerText = test_info.subtitle
    description.innerText = test_info.description
    start_image.src = getStartImagePath(test_id, lan)
}

function addEventStartButton() {
    start_button.addEventListener("click", function(e){
        window.location.href = "test.html?test_id=" + test_id + "&lan=" + lan
    });
}

function init() {
    test_id = 1 // FIX ME
    lan = 'kor'

    const test_info = getCoverPageInfo(test_id, lan)

    setupInformation(test_info, test_id, lan)
    addEventStartButton()
}

init();
