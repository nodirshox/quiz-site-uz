// Global variables
const params = (new URL(location)).searchParams;
const subjectId = parseInt(params.get("id"));
const questionNumber = parseInt(params.get("q"));
let totalQuestions = 0;

window.onload = function() {
    // Identify page
    const path = location.pathname;
    const currentPage = path.split("/").pop();

    if (currentPage.length === 0 || currentPage === "index.html") {
        populateSubjects();
    } else if (currentPage === "quiz.html") {
        // Add event listener to submit button
        populateQuestion();
        document.getElementById("submit").addEventListener("click", answerQuestion);
    }
}

function answerQuestion() {
    const radioButtons = document.querySelectorAll('input[name="question"]');
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }

    if (selectedSize == null) {
        alert("Please select the answer");
    } else {
        // Write to locale storage selected answer: alert(selectedSize);
        let history = localStorage.getItem(subjectId);
        if (history == null) {
            history = questionNumber + "-" + selectedSize;
        } else {
            history = history + ", " + questionNumber + "-" + selectedSize;
        }
        localStorage.setItem(subjectId, history);

        // check if it is final question otherwise redirect to next question
        if (questionNumber === totalQuestions) {
            window.location = "result.html";
        } else {
            window.location = `quiz.html?id=${subjectId}&q=${questionNumber + 1}`;
        }
    }
}

function populateSubjects() {
    // Populate subjects to grid boxes
    const subjects = data.map(e => {
        return `
        <div class="box">
            <a href="quiz.html?id=${e.id}&q=1">${e.title}</a>
        </div>
    `;
    }).join("");
    let container = document.getElementById("subjects");
    container.insertAdjacentHTML("beforeend", subjects);
}

function populateQuestion() {
    try {        
        // Search subject by query param
        const subjects = data.filter(e => e.id == subjectId);
        if (subjects.length !== 1) throw "Subject not found";
    
        // Set subject to h1
        const subjectsTitle = subjects[0].title;
        document.getElementById("subject").innerText = subjectsTitle + " Quiz";
    
        // check question is empty or not
        const questions = subjects[0].questions;
        if (questions.length === 0) throw "Question set is empty, come back later..."
        totalQuestions = questions.length;

        // Find question by id
        const selectedQuestion = questions.filter(e => e.id == questionNumber);
        if (selectedQuestion.length !== 1) throw "Question not found";
    
        // Set current question number
        document.getElementById("current").innerHTML = `Question ${questionNumber} of ${totalQuestions}`;

        // Delete localStorage if question number 1
        if (questionNumber === 1) {
            localStorage.removeItem(subjectId);
        }

        // Set question
        document.getElementById("title").innerText = selectedQuestion[0].body;
    
        // Populate questions
        const options = selectedQuestion[0].options.map((e, index) => {
            return `
            <label for="answer${index + 1}" class="option">
                <input type="radio" id="answer${index + 1}" value=${e.id} name="question">
                ${e.text}
            </label>
            `
        }).join("");
        document.getElementById("options").insertAdjacentHTML("beforeend", options);

    } catch (e) {
        alert(e);
        window.location = "index.html";
    }
}

// Questions
const data = [
    {
        "id": "1",
        "title": "HTML",
        "questions": [
            {
                "id": "1",
                "body": "What is PHP?",
                "options": [
                    {
                        "id": "1",
                        "text": "Elephant",
                        "correct": false
                    },
                    {
                        "id": "2",
                        "text": "Programming language",
                        "correct": true
                    },
                    {
                        "id": "3",
                        "text": "Car",
                        "correct": false
                    }
                ]
            },
            {
                "id": "2",
                "body": "How to declare variable in PHP?",
                "options": [
                    {
                        "id": "1",
                        "text": "Elephant",
                        "correct": false
                    },
                    {
                        "id": "2",
                        "text": "Programming language",
                        "correct": true
                    },
                    {
                        "id": "3",
                        "text": "Car",
                        "correct": false
                    }
                ]
            }
        ]
    },
    {
        "id": "2",
        "title": "CSS",
        "questions": []
    },
    {
        "id": "3",
        "title": "jQuery",
        "questions": []
    },
    {
        "id": "4",
        "title": "NodeJS",
        "questions": []
    }
]
