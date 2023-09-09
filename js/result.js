import { getResultInfo, getImagePath } from './util.js';

// Get references to the HTML elements
const typePretext = document.getElementById('typePretext');
const typeName = document.getElementById('typeName');
const typeImg = document.getElementById('typeImg')

const productPretext = document.getElementById('productPretext');
const productList = document.getElementsByClassName('product')

const bestImg = document.getElementById('bestImg')
const worstImg = document.getElementById('worstImg')

const retryButton = document.getElementById('retryButton')

// Sample questions and question numbers
var test_id = null
var lan = null
var type = null

var result_info =  null

// Util
function findValueByKey(array, keyToFind, valueToFind) {
    for (const item of array) {
        if (item[keyToFind] === valueToFind) {
            return item;
        }
    }
    return null; // Return null if the key-value pair is not found
}

function assertResultInfo() {
    if (result_info == null) {
        console.log("Error at getting result data")
    }
}

// Setup
function getProductInfoByIndex(product_idx, product_info) {
    return product_idx.map((idx) => {
        // Check if idx is valid (within the range of the product_info array)
        if (idx >= 1 && idx <= product_info.length) {
            return product_info[idx - 1]; // Adjust index to start from 0
        } else {
            return null; // Return null for invalid indices
        }
    });
}

function setupType(info) {
    typePretext.innerText = info.type_pretext
    typeName.innerText = findValueByKey(info.type_name_mapping, 'type', type).name
    const image_name = findValueByKey(info.result_images_mapping, 'type', type).img
    typeImg.src = getImagePath(image_name)
}

function setupProduct(product_pretext, product_mapping, product_info) {
    productPretext.innerText = product_pretext
    const product_idx = findValueByKey(product_mapping, 'type', type).product_idx
    const selected_products = getProductInfoByIndex(product_idx, product_info);

    for (const [index, product] of Object.entries(productList)) {
        const product_name = product.querySelector('.product-name');
        const product_description = product.querySelector('.product-description');
        const img = product.querySelector('img')

        product_name.innerText = selected_products[index].name
        product_description.innerHTML = selected_products[index].description
        img.src = getImagePath(selected_products[index].img)
    }
}

function setupBestWorst(images_mapping, best_worst) {
    const item = findValueByKey(best_worst, 'type', type)
    const bestImgSrc = findValueByKey(images_mapping, 'type', item.best).img
    const worstImgSrc = findValueByKey(images_mapping, 'type', item.worst).img

    bestImg.src = getImagePath(bestImgSrc)
    worstImg.src = getImagePath(worstImgSrc)
}

function setupShare() {
    // TODO: JJ
}


function addEventStartButton() {
    retryButton.addEventListener("click", function(e){
        window.location.href = "start.html"
    });
}

function setupResultInfo() {
    result_info = getResultInfo(test_id, lan)
}

function receiveDataFromPreviousPage() {
    test_id = window.location.search.substring(1).split("&")[0].split("=")[1];
    lan = window.location.search.substring(1).split("&")[1].split("=")[1];
    type = window.location.search.substring(1).split("&")[2].split("=")[1];
}

function init() {
    receiveDataFromPreviousPage()
    setupResultInfo(test_id, lan)

    assertResultInfo()

    setupType(result_info)
    setupProduct(result_info.product_pretext, result_info.product_mapping, result_info.product_info)
    setupBestWorst(result_info.result_images_mapping, result_info.best_worst)
    setupShare()
    addEventStartButton()
}

init();