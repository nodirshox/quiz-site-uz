// Global variables
const params = new URL(location).searchParams;
const subjectId = parseInt(params.get("id"));
const questionNumber = parseInt(params.get("q"));
let totalQuestions = 0;

window.onload = function () {
  try {
    // Identify page
    const path = location.pathname;
    const currentPage = path.split("/").pop();

    if (currentPage.length === 0 || currentPage === "index.html") {
      populateSubjects();
    } else if (currentPage === "quiz.html") {
      // Add event listener to submit button
      populateQuestion();
      document
        .getElementById("submit")
        .addEventListener("click", answerQuestion);
    } else if (currentPage === "result.html") {
      // Search subject by query param
      const subject = searchSubjectById(subjectId);

      // Set subject to h1
      document.getElementById("subject").innerText = subject.title + " Quiz";
      totalQuestions = countTotalQuestion(subject.questions);
      const correctAnswers = countAnswers(subjectId);
      document.getElementById(
        "correct"
      ).innerText = `${correctAnswers}/${totalQuestions}`;

      const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(0);
      document.getElementById("percentage").innerText = `${percentage}%`;
    }
  } catch (e) {
    alert(e);
    window.location = "index.html";
  }
};

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
      history = history + "," + questionNumber + "-" + selectedSize;
    }
    localStorage.setItem(subjectId, history);

    // check if it is final question otherwise redirect to next question
    if (questionNumber === totalQuestions) {
      window.location = `result.html?id=${subjectId}`;
    } else {
      window.location = `quiz.html?id=${subjectId}&q=${questionNumber + 1}`;
    }
  }
}

function populateSubjects() {
  // Populate subjects to grid boxes
  const subjects = data
    .map((e) => {
      return `
        <div class="box">
            <a href="quiz.html?id=${e.id}&q=1">${e.title}</a>
        </div>
    `;
    })
    .join("");
  let container = document.getElementById("subjects");
  container.insertAdjacentHTML("beforeend", subjects);
}

function populateQuestion() {
  // Search subject by query param
  const subject = searchSubjectById(subjectId);

  // Set subject to h1
  document.getElementById("subject").innerText = subject.title + " Quiz";

  totalQuestions = countTotalQuestion(subject.questions);

  // Find question by id
  const selectedQuestion = subject.questions.filter(
    (e) => e.id == questionNumber
  );
  if (selectedQuestion.length !== 1) throw "Question not found";

  // Set current question number
  document.getElementById(
    "current"
  ).innerHTML = `Savollar: ${questionNumber}/${totalQuestions}`;

  // Delete localStorage if question number 1
  if (questionNumber === 1) {
    localStorage.removeItem(subjectId);
  }

  // Set question
  document.getElementById("title").innerText = selectedQuestion[0].body;

  // Populate questions
  const options = selectedQuestion[0].options
    .map((e, index) => {
      return `
        <label for="answer${index + 1}" class="option">
            <input type="radio" id="answer${index + 1}" value=${
        e.id
      } name="question">
            ${e.text}
        </label>
        `;
    })
    .join("");
  document.getElementById("options").insertAdjacentHTML("beforeend", options);
}

function searchSubjectById(subjectId) {
  const subjects = data.filter((e) => e.id == subjectId);
  if (subjects.length !== 1) throw "Subject not found";
  return subjects[0];
}

function countTotalQuestion(questions) {
  // Check question is empty or not
  if (questions.length === 0) throw "Question set is empty, come back later...";
  return questions.length;
}

function countAnswers(subjectId) {
  let answers = localStorage.getItem(subjectId);
  if (answers == null) {
    throw "Answer set not found";
  }
  answers = answers.split(",").map((e) => {
    return {
      question_id: e[0],
      answer_id: e[2],
    };
  });
  const subject = searchSubjectById(subjectId);
  const questions = subject.questions;
  let total = 0;
  for (let i = 0; i < questions.length; i++) {
    let correctAnswer = questions[i].options.filter(
      (e) => e.correct == true
    )[0];
    for (let j = 0; j < answers.length; j++) {
      if (
        answers[j].question_id == questions[i].id &&
        answers[j].answer_id == correctAnswer.id
      ) {
        total++;
      }
    }
  }
  return total;
}
