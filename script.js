let preload = document.querySelector(".preload");
let startBtn = document.querySelector("#start_btn");
let quizRulesCard = document.querySelector("#quiz_rules");
let quizCard = document.querySelector("#quiz_card");
let continueBtn = document.querySelector("#continueBtn");
let nextBtn = document.querySelector("#nextBtn");
let exitBtn = document.querySelector("#exitBtn");
const countdownText = document.getElementById("countdownText");
const countdownNum = document.getElementById("countdownNum");
const countdownContainer = document.querySelector(".count-down-container ");
const countdownTime = document.querySelector(".tym");

let countingDown;

// ================================================
// ================================================

window.addEventListener("load", function () {
  this.setTimeout(() => {
    preload.classList.add("hidden");
    startBtn.classList.remove("hidden");
  }, 500);
});

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  preload.style.display = "flex";
  this.setTimeout(() => {
    preload.classList.add("hidden");
    quizRulesCard.classList.remove("hidden");
  }, 500);
});

exitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to exit?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      // window.close();
      preload.style.display = "flex";
      quizRulesCard.classList.add("hidden");
      window.setTimeout(() => {
        preload.style.display = "none";
        startBtn.classList.remove("hidden");
      }, 1000);
    }
  });
});

continueBtn.addEventListener("click", startCountdown);

function startCountdown() {
  countdownContainer.classList.remove("hidden");

  let countdown = 3;
  countdownText.textContent = "Get ready... The game starts in ";
  countdownNum.textContent = "3";

  const interval = setInterval(() => {
    if (countdown > 1) {
      countdown--;
      countdownText.textContent = `Get ready... The game starts in `;
      countdownNum.textContent = countdown;
    } else {
      clearInterval(interval);
      countdownText.textContent = "Go!";
      countdownNum.classList.add("hidden");
      const goInterval = setInterval(() => {
        countdownContainer.classList.add("hidden");
        quizCard.classList.remove("hidden");
        startCountDown();
      }, 500);
    }
  }, 1000);
}

function startCountDown() {
  countingDown = 5;

  countdownTime.innerHTML = countingDown;
  let countingDownInterval = setInterval(() => {
    countingDown--;
    countdownTime.innerHTML = countingDown;
    if (countingDown === 0) {
      clearInterval(countingDownInterval);
      nextBtn.classList.remove("hidden");
    }
  }, 1000);
}

//Questions and Options array

const quizArray = [
  {
    id: 1,
    question: "Which of the following is a JavaScript data type?",
    options: ["String", "Element", "ArrayList", "Node"],
    correct: "String",
  },
  {
    id: 2,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/*", "<!--", "#"],
    correct: "//",
  },
  {
    id: 3,
    question: "Which method is used to convert a JSON string to an object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.objectify()",
      "JSON.convert()",
    ],
    correct: "JSON.parse()",
  },
  {
    id: 4,
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()",
  },
  {
    id: 5,
    question: "How do you declare a JavaScript variable?",
    options: [
      "var myVariable;",
      "variable myVariable;",
      "v myVariable;",
      "myVariable var;",
    ],
    correct: "var myVariable;",
  },
  {
    id: 6,
    question: "What does 'DOM' stand for in JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Object Model",
      "Document Operation Mode",
    ],
    correct: "Document Object Model",
  },
  {
    id: 7,
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", "=>"],
    correct: "=",
  },
  {
    id: 8,
    question: "Which of the following is not a reserved keyword in JavaScript?",
    options: ["interface", "throws", "program", "let"],
    correct: "program",
  },
  {
    id: 9,
    question: "How can you detect the client's browser name in JavaScript?",
    options: [
      "navigator.appName",
      "browser.name",
      "client.browserName",
      "window.browserName",
    ],
    correct: "navigator.appName",
  },
  {
    id: 10,
    question: "Which built-in method sorts the elements of an array?",
    options: ["sort()", "changeOrder(order)", "order()", "orderBy()"],
    correct: "sort()",
  },
];

// Creating Questions
// const optionAnswerBtn = document.querySelectorAll(".answer-option");
// let questions = document.querySelector("#question");
// let randomIndex = Math.floor(Math.random() * quizArray.length);

// let i = 0;

// let usedIndices = [];

// while (i < quizArray.length) {
//   if (!usedIndices.includes(randomIndex)) {

//   }
// }

// while (i < quizArray.length) {
//   if (!usedIndices.includes(randomIndex)) {
//     question.textContent = quizArray[randomIndex].question;
//     usedIndices.push(randomIndex);

//     i++;
//   }
// }

// for (let i = 0; i < optionAnswerBtn.length; i++) {
//   optionAnswerBtn[i].addEventListener;
// }
