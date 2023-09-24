import { getStartTopImagePath, getStartBottomImagePath, getCoverPageInfo } from './util.js';

const start_image   = document.querySelector("#top-image")
const bottom_image  = document.querySelector("#bottom-image")
const start_button  = document.querySelector(".start-button")


var test_id = null
var lan = null

function setupInformation(test_id, lan) {
    start_image.src = getStartTopImagePath(test_id)
    bottom_image.src = getStartBottomImagePath(test_id)
}

function addEventStartButton() {
    start_button.addEventListener("click", function(e){
        window.location.href = "pages/test.html?test_id=" + test_id + "&lan=" + lan
    });
}

function init() {
    test_id = 1 // FIX ME
    lan = 'kor'

    // const test_info = getCoverPageInfo(test_id, lan)

    setupInformation(test_id, lan)
    addEventStartButton()
}

init();
