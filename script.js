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

// Identify page
const path = location.pathname;
const currentPage = path.split("/").pop();

if (currentPage === "index.html") {
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
} else if (currentPage === "quiz.html") {
    try {
        const params = (new URL(location)).searchParams;
        const subjectId = params.get("id");
        
        // Search subject by query param
        const subjects = data.filter(e => e.id == subjectId);
        if (subjects.length !== 1) throw "Subject not found";
    
        // Set subject to h1
        const subjectsTitle = subjects[0].title;
        document.getElementById("subject").innerText = subjectsTitle + " Quiz";
    
        // check question is empty or not
        const questions = subjects[0].questions;
        if (questions.length === 0) throw "Question set is empty, come back later..."
        
        // Find question by id
        const questionNumber = params.get("q");
        const selectedQuestion = questions.filter(e => e.id == questionNumber);
        if (selectedQuestion.length !== 1) throw "Question not found";
    
        // Set current question number
        document.getElementById("current").innerHTML = `Question ${questionNumber} of ${questions.length}`;

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
