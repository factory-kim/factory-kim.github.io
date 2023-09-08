import { getResultInfo } from './util.js';

// Get references to the HTML elements
const typePretext = document.getElementById('typePretext');
const typeName = document.getElementById('typeName');
const typeImg = document.getElementById('typeImg')

const productPretext = document.getElementById('productPretext');
const productList = document.getElementsByClassName('product')

// Sample questions and question numbers
var test_id = null
var lan = null
var type = null

var result_info =  null

function findValueByKey(array, keyToFind, valueToFind) {
    for (const item of array) {
        if (item[keyToFind] === valueToFind) {
            return item;
        }
    }
    return null; // Return null if the key-value pair is not found
}

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
    typeImg.src = findValueByKey(info.result_images_mapping, 'type', type).img
}

function setupProduct(product_pretext, product_mapping, product_info) {
    productPretext.innerText = product_pretext
    const product_idx = findValueByKey(product_mapping, 'type', type).product_idx
    const selectedProducts = getProductInfoByIndex(product_idx, product_info);

    for (const [index, product] of Object.entries(productList)) {
        const productName = product.querySelector('.product-name');
        const productDescription = product.querySelector('.product-description');
        const img = product.querySelector('.img')

        productName.innerText = selectedProducts[index].name
        productDescription.innerHTML = selectedProducts[index].description
        img.src = selectedProducts[index].img
    }
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
    setupProduct(result_info.product_pretext, result_info.product_mapping, result_info.product_info)
    setupBestWorst(result_info.best_worst)
    setupShare()
}

init();