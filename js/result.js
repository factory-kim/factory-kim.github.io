import { getResultInfo } from './util.js';

// Get references to the HTML elements
const pretext = document.getElementsByClassName()
const questionNumberElement = document.getElementById('questionNumber');
const questionTextElement = document.getElementById('questionText');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const loading = document.getElementById("loading");
const ad = document.getElementById("ad");

// Sample questions and question numbers
var test_id = null
var lan = null
var type = null

var result_info =  null
var currentQuestionIndex = 0;

function setupType(info) {

}

function setupProduct(product_mapping, product_info) {

}

function setupBestWorst(best_worst) {

}

function setupShare() {

}


function setupResultInfo() {
    result_info = getResultInfo(test_id, lan)
}

function receiveDataFromPreviousPage() {
    test_id = window.location.search.substring(1).split("&")[0].split("=")[1];
    lan = window.location.search.substring(1).split("&")[1].split("=")[1];
    type = window.location.search.substring(1).split("&")[2].split("=")[1];
}

function assertResultInfo() {
    if (result_info == null) {
        console.log("Error at getting result data")
    }
}

// Initial question update
function init() {
    receiveDataFromPreviousPage()
    setupResultInfo(test_id, lan)

    assertResultInfo()

    setupType(result_info)
    setupProduct(result_info.product_mapping, result_info.product_info)
    setupBestWorst(result_info.best_worst)
    setupShare()
}

init();