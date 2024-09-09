const preload = document.querySelector(".preload");
const startBtn = document.querySelector("#start_btn");
const quizRulesCard = document.querySelector("#quiz_rules");
const continueBtn = document.querySelector("#continueBtn");
const countdownContainer = document.querySelector(".count-down-container ");
const exitBtn = document.querySelector("#exitBtn");
let quizCard = document.querySelector("#quiz_card");
let countdownText = document.getElementById("countdownText");
let countdownNum = document.getElementById("countdownNum");
let countdownTime = document.querySelector(".tym");
let questions = document.querySelector("#question");
let optionAnswerBtn = document.querySelector("#answer-option");
let complete = document.querySelector("#complete");
let correctScore = document.querySelector(".correct-score");
let totalQuestion = document.querySelector(".total-question");
let totalQuestion2 = document.querySelector(".total-question2");
let nextQuestion = document.querySelector(".next-question");
let replayBtn = document.querySelector(".replay-btn");
let quitBtn = document.querySelector(".quit-btn");
let questionNextNum = document.querySelector(".questionNextNum");
// form
let userForm = document.querySelector("#userForm");
let firstName = document.querySelector("#firstNameInput");
let lastName = document.querySelector("#lastNameInput");
let isEventDisabled;

// setting setTimeout for preloading
stopLoad();
function stopLoad() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preload.classList.add("hidden");
      startBtn.classList.remove("hidden");
    }, 2000);
  });
}

// adding Event Listener to start btn
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  preload.style.display = "flex";
  setTimeout(() => {
    preload.classList.add("hidden");
    quizRulesCard.classList.remove("hidden");
  }, 2000);
});

// Start Quiz

continueBtn.addEventListener("click", continueGo);

function continueGo() {
  countdownContainer.classList.remove("hidden");
  quizRulesCard.classList.add("hidden");

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
      countdownContainer.classList.add("hidden");
      quizCard.classList.remove("hidden");
      startCountDown();
      //   const goInterval = setInterval(() => {

      //   }, 500);
    }
  }, 1000);
}

// Exit Button
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

// Next question counting down
let isClicked = false;
function startCountDown() {
  countingDown = 30;

  countdownTime.innerHTML = countingDown;

  let countingDownInterval = setInterval(() => {
    countingDown--;
    // console.log(countingDown);

    countdownTime.innerHTML = countingDown;
    if (countingDown === 0) {
      // isClicked = false;
      clearInterval(countingDownInterval);
      load();
      // next();
      return;
    } else if (isClicked) {
      isClicked = false;
      clearInterval(countingDownInterval);
      next();
      return;
    }
  }, 1500);
}

// =============================
//Questions and Options array
// =============================

const quizQuestions = [
  {
    id: 1,
    question: "What is a function declaration?",
    options: [
      "A way to assign a function to a variable",
      "A way to define a function using the 'function' keyword",
      "A way to call a function",
      "None of the above",
    ],
    correct: "A way to define a function using the 'function' keyword",
  },
  {
    id: 2,
    question: "Which of the following is a valid function declaration?",
    options: [
      "function myFunction() {}",
      "let myFunction = function() {}",
      "myFunction() = function {}",
      "All of the above",
    ],
    correct: "function myFunction() {}",
  },
  {
    id: 3,
    question:
      "What is the difference between a function declaration and a function expression?",
    options: [
      "A function declaration is hoisted, while a function expression is not.",
      "A function expression is hoisted, while a function declaration is not.",
      "There is no difference.",
      "A function declaration must be named, while a function expression cannot be.",
    ],
    correct:
      "A function declaration is hoisted, while a function expression is not.",
  },
  {
    id: 4,
    question: "How do you call a function named 'greet'?",
    options: [
      "greet()",
      "call greet()",
      "function greet()",
      "None of the above",
    ],
    correct: "greet()",
  },
  {
    id: 5,
    question:
      "What will happen if you try to call a function before it's declared?",
    options: [
      "It will throw an error.",
      "It will work if it's a function declaration.",
      "It will always work.",
      "None of the above",
    ],
    correct: "It will work if it's a function declaration.",
  },
  {
    id: 6,
    question:
      "Which of the following is an example of passing arguments to a function?",
    options: [
      "function myFunction(a, b) {}",
      "myFunction(1, 2);",
      "Both a and b",
      "None of the above",
    ],
    correct: "myFunction(1, 2);",
  },
  {
    id: 7,
    question: "What is a parameter in a function?",
    options: [
      "The value passed to the function.",
      "The variable in the function definition.",
      "The return value of the function.",
      "None of the above",
    ],
    correct: "The variable in the function definition.",
  },
  {
    id: 8,
    question: "How many parameters can a function have?",
    options: ["None", "One", "As many as needed", "Two"],
    correct: "As many as needed",
  },
  {
    id: 9,
    question: "What is the scope of a variable declared inside a function?",
    options: [
      "Global",
      "Local to the function",
      "Local to the file",
      "Local to the block",
    ],
    correct: "Local to the function",
  },
  {
    id: 10,
    question: "What is the purpose of the 'return' statement in a function?",
    options: [
      "To stop the function from executing.",
      "To return a value from the function.",
      "To declare a variable in the function.",
      "None of the above",
    ],
    correct: "To return a value from the function.",
  },
  {
    id: 11,
    question: "What does the arrow function syntax look like?",
    options: [
      "function => myFunction() {}",
      "() => {}",
      "() => {}",
      "All of the above",
    ],
    correct: "() => {}",
  },
  {
    id: 12,
    question: "What is the advantage of using arrow functions?",
    options: [
      "Simpler syntax.",
      "Lexical 'this' binding.",
      "Both a and b.",
      "None of the above",
    ],
    correct: "Both a and b.",
  },
  {
    id: 13,
    question:
      "What will happen if you try to access a variable declared inside a function, from outside the function?",
    options: [
      "It will be accessible.",
      "It will cause an error.",
      "It depends on the variable.",
      "None of the above",
    ],
    correct: "It will cause an error.",
  },
  {
    id: 14,
    question:
      "What is the default return value of a function if no return statement is provided?",
    options: ["null", "undefined", "0", "An empty string"],
    correct: "undefined",
  },
  {
    id: 15,
    question: "Can a function in JavaScript return multiple values?",
    options: [
      "Yes, by returning an array or object.",
      "No, it can only return a single value.",
      "Only in certain cases.",
      "None of the above",
    ],
    correct: "Yes, by returning an array or object.",
  },
  {
    id: 16,
    question: "Which keyword is used to declare a function in JavaScript?",
    options: ["func", "function", "def", "fun"],
    correct: "function",
  },
  {
    id: 17,
    question: "What is a named function expression?",
    options: [
      "A function expression with a name.",
      "A function expression without a name.",
      "A function declaration with a name.",
      "None of the above",
    ],
    correct: "A function expression with a name.",
  },
  {
    id: 18,
    question: "How do arrow functions differ from regular functions?",
    options: [
      "Arrow functions cannot have their own 'this' context.",
      "Arrow functions have a more concise syntax.",
      "Arrow functions cannot be used as constructors.",
      "All of the above",
    ],
    correct: "All of the above",
  },
  {
    id: 19,
    question:
      "Which of the following is true about the 'this' keyword in arrow functions?",
    options: [
      "'this' refers to the global object.",
      "'this' refers to the object in which the arrow function is defined.",
      "'this' is lexically bound.",
      "Arrow functions do not have 'this'.",
    ],
    correct: "'this' is lexically bound.",
  },
  {
    id: 20,
    question: "What is a function expression?",
    options: [
      "A function assigned to a variable.",
      "A function declared using the 'function' keyword.",
      "A function declared within another function.",
      "None of the above",
    ],
    correct: "A function assigned to a variable.",
  },
  {
    id: 21,
    question: "Which of the following is an example of a function expression?",
    options: [
      "let myFunc = function() {}",
      "function myFunc() {}",
      "myFunc() = function {}",
      "None of the above",
    ],
    correct: "let myFunc = function() {}",
  },
  {
    id: 22,
    question: "What is the difference between parameters and arguments?",
    options: [
      "Parameters are values passed to a function; arguments are variables in the function.",
      "Arguments are values passed to a function; parameters are variables in the function.",
      "There is no difference.",
      "None of the above",
    ],
    correct:
      "Arguments are values passed to a function; parameters are variables in the function.",
  },
  {
    id: 23,
    question: "Which of the following is true about function scope?",
    options: [
      "Variables declared within a function are accessible outside the function.",
      "Variables declared within a function are only accessible within the function.",
      "Function scope does not exist in JavaScript.",
      "None of the above",
    ],
    correct:
      "Variables declared within a function are only accessible within the function.",
  },
  {
    id: 24,
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    options: [
      "A function that is executed as soon as it is defined.",
      "A function that is executed later in the code.",
      "A function that is declared but never executed.",
      "None of the above",
    ],
    correct: "A function that is executed as soon as it is defined.",
  },
  {
    id: 25,
    question: "Which of the following is an example of an IIFE?",
    options: [
      "function myFunc() {}()",
      "(function() {})()",
      "() function() {}",
      "None of the above",
    ],
    correct: "(function() {})()",
  },
  {
    id: 26,
    question: "Can arrow functions have default parameters?",
    options: ["Yes", "No", "Only in ES6", "None of the above"],
    correct: "Yes",
  },
  {
    id: 27,
    question: "How can you make a function return early?",
    options: [
      "By using the 'return' statement.",
      "By using the 'break' statement.",
      "By using the 'exit' statement.",
      "None of the above",
    ],
    correct: "By using the 'return' statement.",
  },
  {
    id: 28,
    question: "What is function hoisting?",
    options: [
      "The ability to call a function before it is declared.",
      "The ability to declare a function after it is called.",
      "Both a and b.",
      "None of the above",
    ],
    correct: "The ability to call a function before it is declared.",
  },
  {
    id: 29,
    question:
      "What will be the output of the following code?\n\nfunction add(a, b) { return a + b; }\nconsole.log(add(2, 3));",
    options: ["2", "3", "5", "undefined"],
    correct: "5",
  },
  {
    id: 30,
    question: "Can a function be assigned to a variable in JavaScript?",
    options: ["Yes", "No", "Only in ES6", "None of the above"],
    correct: "Yes",
  },
  {
    id: 31,
    question:
      "What does the following arrow function return?\n\nlet sum = (a, b) => a + b;\nconsole.log(sum(2, 3));",
    options: ["5", "2", "3", "undefined"],
    correct: "5",
  },
  {
    id: 32,
    question: "What is lexical scope?",
    options: [
      "The ability of a function to access variables from the scope it was created in.",
      "The scope of variables within a function.",
      "The scope of variables within a block.",
      "None of the above",
    ],
    correct:
      "The ability of a function to access variables from the scope it was created in.",
  },
  {
    id: 33,
    question:
      "How do you define a function with a single parameter using arrow function syntax?",
    options: [
      "() => parameter",
      "(parameter) => {}",
      "parameter => {}",
      "None of the above",
    ],
    correct: "parameter => {}",
  },
  {
    id: 34,
    question: "What is the 'arguments' object in a function?",
    options: [
      "An array-like object that contains all the arguments passed to the function.",
      "A keyword to access function parameters.",
      "An object passed as an argument to a function.",
      "None of the above",
    ],
    correct:
      "An array-like object that contains all the arguments passed to the function.",
  },
  {
    id: 35,
    question: "Can arrow functions use the 'arguments' object?",
    options: [
      "Yes",
      "No",
      "Only if they have parameters.",
      "None of the above",
    ],
    correct: "No",
  },
  {
    id: 36,
    question:
      "Which of the following is true about the 'this' keyword in a regular function?",
    options: [
      "'this' refers to the global object.",
      "'this' refers to the object that called the function.",
      "'this' is undefined.",
      "None of the above",
    ],
    correct: "'this' refers to the object that called the function.",
  },
  {
    id: 37,
    question:
      "Which of the following is a benefit of using named function expressions?",
    options: [
      "They are easier to debug.",
      "They are hoisted.",
      "They are always faster.",
      "All of the above",
    ],
    correct: "They are easier to debug.",
  },
  {
    id: 38,
    question:
      "What will be the output of the following code?\n\nlet myFunc = function() { return 1; };\nconsole.log(myFunc());",
    options: ["1", "undefined", "null", "It will throw an error."],
    correct: "1",
  },
  {
    id: 39,
    question: "Which of the following statements is true?",
    options: [
      "A function can be passed as an argument to another function.",
      "A function cannot return another function.",
      "Functions cannot be stored in variables.",
      "None of the above",
    ],
    correct: "A function can be passed as an argument to another function.",
  },
  {
    id: 40,
    question:
      "What does the following code do?\n\n(function() { console.log('Hello!'); })();",
    options: [
      "Defines a function.",
      "Defines and immediately calls the function.",
      "Throws an error.",
      "None of the above",
    ],
    correct: "Defines and immediately calls the function.",
  },
  {
    id: 41,
    question:
      "Which of the following is a correct way to define a function with default parameters?",
    options: [
      "function myFunc(a = 1, b = 2) {}",
      "function myFunc(a == 1, b == 2) {}",
      "function myFunc(a : 1, b : 2) {}",
      "None of the above",
    ],
    correct: "function myFunc(a = 1, b = 2) {}",
  },
  {
    id: 42,
    question: "Which of the following is NOT true about arrow functions?",
    options: [
      "Arrow functions have a concise syntax.",
      "Arrow functions can be used as constructors.",
      "Arrow functions do not have their own 'this' context.",
      "Arrow functions are always anonymous.",
    ],
    correct: "Arrow functions can be used as constructors.",
  },
  {
    id: 43,
    question:
      "What will the following code output?\n\nfunction greet() { return 'Hello'; }\nconsole.log(typeof greet);",
    options: ["'function'", "'string'", "'object'", "'undefined'"],
    correct: "'function'",
  },
  {
    id: 44,
    question: "What is function chaining?",
    options: [
      "Calling multiple functions in a single line of code.",
      "Calling a function within another function.",
      "Using multiple functions in an array.",
      "None of the above",
    ],
    correct: "Calling multiple functions in a single line of code.",
  },
  {
    id: 45,
    question: "What is the primary advantage of using closures in JavaScript?",
    options: [
      "They help in data encapsulation.",
      "They make code run faster.",
      "They are required for recursion.",
      "None of the above",
    ],
    correct: "They help in data encapsulation.",
  },
  {
    id: 46,
    question: "Which of the following is NOT a valid way to call a function?",
    options: ["myFunc()", "new myFunc()", "myFunc.call()", "None of the above"],
    correct: "None of the above",
  },
  {
    id: 47,
    question:
      "What will be the output of the following code?\n\nfunction add(a, b) { return a + b; }\nlet result = add.call(null, 1, 2);\nconsole.log(result);",
    options: ["1", "2", "3", "undefined"],
    correct: "3",
  },
  {
    id: 48,
    question:
      "What will the following code output?\n\nlet x = function(a, b) { return a * b; };\nconsole.log(typeof x);",
    options: ["'function'", "'number'", "'object'", "'undefined'"],
    correct: "'function'",
  },
  {
    id: 49,
    question: "Which of the following statements is true?",
    options: [
      "JavaScript functions can have default parameters.",
      "Functions in JavaScript cannot return another function.",
      "Arrow functions must have a return statement.",
      "None of the above",
    ],
    correct: "JavaScript functions can have default parameters.",
  },
  {
    id: 50,
    question:
      "What does the following code output?\n\nfunction myFunc() {\n  var x = 10;\n  if (true) {\n    let y = 20;\n    console.log(x + y);\n  }\n  console.log(y);\n}\n\nmyFunc();",
    options: [
      "30 followed by an error",
      "30 followed by 20",
      "30 followed by undefined",
      "None of the above",
    ],
    correct: "30 followed by an error",
  },
];

// Creating Questions
let remainingQuestion = [...quizQuestions];
// console.log(remainingQuestion);

let wrongPicked = 0;
let correctPicked = 0;
let askedQuestionIndex = [];
totalQuestion2.textContent = quizQuestions.length;

function getRandomNumber() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * remainingQuestion.length);
  } while (askedQuestionIndex.includes(randomIndex));
  askedQuestionIndex.push(randomIndex);

  return randomIndex;
}

displayQuestion();
function displayQuestion() {
  if (askedQuestionIndex.length === remainingQuestion.length) {
    quizCard.classList.add("hidden");
    preload.style.display = "flex";
    setTimeout(() => {
      preload.classList.add("hidden");
      complete.classList.remove("hidden");
    }, 3000);
    const correctPercentage = (correctPicked / remainingQuestion.length) * 100;
    correctScore.textContent = correctPicked;
    totalQuestion.textContent = quizQuestions.length;
    console.log("Complete!" + correctPercentage);
    console.log("Wrong Anwers: " + wrongPicked);
    console.log("Correct Answers: " + correctPicked);
    return;
  }

  let randomOptionIndex = [0, 1, 2, 3];
  randomOptionIndex.sort(() => Math.random() - 0.5);
  randomOptionIndex.forEach((num) => {
    num;
  });

  const currentQuestionIndex = getRandomNumber();
  const currentQuestion = remainingQuestion[currentQuestionIndex];
  questions.textContent = currentQuestion.question;
  optionAnswerBtn.innerHTML = "";

  currentQuestion.options.forEach((option, i) => {
    const button = document.createElement("p");
    button.textContent = option;
    button.classList.add("answer-option");
    optionAnswerBtn.appendChild(button);
    button.textContent = currentQuestion.options[randomOptionIndex[i]];

    isEventDisabled = true;

    button.addEventListener("click", () => {
      if (isEventDisabled) {
        if (button.textContent === currentQuestion.correct) {
          correctAns();
          correctPicked++;
        } else {
          correctAns();
          wrongPicked++;
          button.classList.add("wrong");
        }
        isEventDisabled = false;
      }
    });
  });

  let optionAnswerBtnNew = document.querySelectorAll(".answer-option");
  // ====================
  // Correct Function
  // ====================
  function correctAns() {
    optionAnswerBtnNew.forEach((btn) => {
      if (btn.textContent === currentQuestion.correct) {
        btn.classList.add("success");
      }
    });
    isClicked = true;
  }

  questionNextNum.textContent = `${askedQuestionIndex.length}. `;
  nextQuestion.textContent = askedQuestionIndex.length;
  console.log(askedQuestionIndex);
}

function next() {
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  load();
});

function load() {
  displayQuestion();
  startCountDown();
  nextBtn.classList.add("hidden");
}

replayBtn.addEventListener("click", () => {
  // complete.classList.add("hidden");
  window.location.reload();
});

// Quit Button
quitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to quit the game?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../ttaJavaScript.html";
    }
  });
});

// form
let userData = [];
let idCount = 1;
let firstNameValue = firstName.value;
let lastNameValue = lastName.value;

const userCorrectPercentage = (correctPicked / remainingQuestion.length) * 100;
userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (firstName.value === "") {
    alert("No");
  } else {
    const userObject = {
      id: idCount++,
      firstName: firstNameValue,
      lastName: lastNameValue,
      scores: `${userCorrectPercentage}%`,
    };
    console.log(firstName.value);
    console.log(lastName.value);

    userData.push(userObject);
    console.log(userData);
  }
});
