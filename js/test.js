import { getQuestions } from './util.js';

// Get references to the HTML elements
const mainContainer = document.getElementById('mainContainer')
const questionNumberElement = document.getElementById('questionNumber');
const questionTextElement = document.getElementById('questionText');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const loading = document.getElementById("loading");
const ad = document.getElementById("ad");

// Sample questions and question numbers
var test_id = null
var lan = null
var questions = []
var currentQuestionIndex = 0;

// Function to update the question and question number
function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}:`;
        questionTextElement.textContent = currentQuestion.question;
        
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
        loading.style.display = "none",
        //ad.style.display = "block"
        goToNextPage()
    }, 2000);
}

// Go to next page
function goToNextPage() {
    const type =  'angry' // getType()
    window.location.href = "result.html?test_id=" + test_id + "&lan=" + lan + "&type=" + type
}

// Setup
function addEventOnAnswerButtons() {
    // Event listener for Button 1
    button1.addEventListener('click', () => {
        currentQuestionIndex++;
        updateQuestion();
    });

    // Event listener for Button 2
    button2.addEventListener('click', () => {
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
