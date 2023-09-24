import { getQuestions, getAlgorithm } from './util.js';

// Get references to the HTML elements
const mainContainer = document.getElementById('mainContainer');
const questionNumberElement = document.getElementById('questionNumber');
const questionTextElement = document.getElementById('questionText');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const loading = document.getElementById("loading");
const ad = document.getElementById("ad");
const remainQuestion = document.getElementById('remainQuestion');

// Sample questions and question numbers
var test_id = null
var lan = null
var questions = []
var currentQuestionIndex = 0;

const selectedButtonNumbers = [];

// Function to update the question and question number
function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionNumberElement.textContent = `Q ${currentQuestionIndex + 1}`;
        questionTextElement.textContent = currentQuestion.question;
        remainQuestion.textContent = `${currentQuestionIndex+1} / ${questions.length}`;

        // Update answer buttons
        button1.textContent = currentQuestion.answers[0];
        button2.textContent = currentQuestion.answers[1];

        const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
        document.getElementById('progress').style.width = `${progressPercent}%`;
    } else {
        showLoading()
    }
}

// Loading
function showLoading() {
    mainContainer.style.display = "none";
    loading.style.display = "block";

    setTimeout(() => {
        loading.style.display = "none"
        goToNextPage()
    }, 2000);
}

// Go to next page
function goToNextPage() {
    const type =  getType()
    window.location.href = "result.html?test_id=" + test_id + "&lan=" + lan + "&type=" + type
}

// Get Type
function getType() {
    const algorithm = getAlgorithm()

    const count_of_ones = selectedButtonNumbers.reduce((count, currentValue) => {
        return count + (currentValue === 1 ? 1 : 0);
    }, 0);

    let i = 0
    for (; i < algorithm.num.length; i++) {
        const diff = count_of_ones - algorithm.num[i]
        if (diff <= 1) { // 1 이하로 차이나야 함
            break
        }
    }

    return algorithm.types[i]
}

// Setup
function addEventOnAnswerButtons() {
    // Event listener for Button 1
    button1.addEventListener('click', () => {
        selectedButtonNumbers[currentQuestionIndex] = 1
        currentQuestionIndex++;
        updateQuestion();
    });

    // Event listener for Button 2
    button2.addEventListener('click', () => {
        selectedButtonNumbers[currentQuestionIndex] = 2
        currentQuestionIndex++;
        updateQuestion();
    });
}

function setupQuestions() {
    questions = getQuestions(test_id, lan)
}

function receiveDataFromPreviousPage() {
    test_id = window.location.search.substring(1).split("&")[0].split("=")[1];
    lan = window.location.search.substring(1).split("&")[1].split("=")[1];
}

// Initial question update
function init() {
    receiveDataFromPreviousPage()
    setupQuestions()
    addEventOnAnswerButtons()

    updateQuestion();
}

init();
