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
const optionAnswerBtn = document.querySelectorAll(".answer-option");
let questions = document.querySelector("#question");

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
      next();
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

let randomQuestionIndex = Math.floor(Math.random() * quizArray.length);

let usedIndices = [];
let quizArraylength = quizArray.length;

let isEventDisabled = true;

for (let i = 0; i < quizArraylength; i++) {
  if (usedIndices.legnth === quizArraylength) {
    alert("done");
  } else if (usedIndices.includes(randomQuestionIndex)) {
  } else {
    questions.textContent = quizArray[randomQuestionIndex].question;
    usedIndices.push(randomQuestionIndex);
  }
}

let randomOptionIndex = [0, 1, 2, 3];

randomOptionIndex.sort(() => Math.random() - 0.5);

console.log(randomOptionIndex);

optionAnswerBtn.forEach((btn, i) => {
  btn.textContent =
    quizArray[randomQuestionIndex].options[randomOptionIndex[i]];
});

optionAnswerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isEventDisabled) {
      if (btn.textContent === quizArray[randomQuestionIndex].correct) {
        correctAnswer();
      } else {
        correctAnswer();
        btn.classList.add("wrong");
      }
      isEventDisabled = false;
    }
  });
});

function correctAnswer() {
  optionAnswerBtn.forEach((btn) => {
    if (btn.textContent === quizArray[randomQuestionIndex].correct) {
      return btn.classList.add("success");
    }
    next()
  });
}

console.log(usedIndices);

function next() {
  nextBtn.classList.remove("hidden");
}

// function checkingAnswer(e) {
//   for (let i = 0; i < optionAnswerBtn.length; i++) {
//     alert(optionAnswerBtn[e].textContent);
//   }
// }

// console.log(optionAnswerBtn[randomQuestionIndex].textContent);
// console.log(quizArray[randomQuestionIndex].correct);
// // if (optionAnswerBtn[i].textContent === quizArray[i].correct) {
// //   console.log("correct");
// // }
