import { getStartImagePath, getCoverPageInfo } from './util.js';

var test_id = null
var lan = null

// JavaScript to make the first item clickable
const firstItem = document.querySelector('.clickable-item:first-child a');

if (firstItem) {
    firstItem.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        window.location.href = this.getAttribute('href'); // Navigate to start.html
        test_id = 1;
        lan = 'kor';
    });
}

function init() {
    // Store the values in localStorage
    localStorage.setItem('test_id', test_id);
    localStorage.setItem('lan', lan);

    const test_info = getCoverPageInfo(test_id, lan);
}

init();
