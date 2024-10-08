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

// const quizQuestions = [
//   {
//     id: 1,
//     question: "What is a function declaration?",
//     options: [
//       "A way to assign a function to a variable",
//       "A way to define a function using the 'function' keyword",
//       "A way to call a function",
//       "None of the above",
//     ],
//     correct: "A way to define a function using the 'function' keyword",
//   },
//   {
//     id: 2,
//     question: "Which of the following is a valid function declaration?",
//     options: [
//       "function myFunction() {}",
//       "let myFunction = function() {}",
//       "myFunction() = function {}",
//       "All of the above",
//     ],
//     correct: "function myFunction() {}",
//   },
//   {
//     id: 3,
//     question:
//       "What is the difference between a function declaration and a function expression?",
//     options: [
//       "A function declaration is hoisted, while a function expression is not.",
//       "A function expression is hoisted, while a function declaration is not.",
//       "There is no difference.",
//       "A function declaration must be named, while a function expression cannot be.",
//     ],
//     correct:
//       "A function declaration is hoisted, while a function expression is not.",
//   },
//   {
//     id: 4,
//     question: "How do you call a function named 'greet'?",
//     options: [
//       "greet()",
//       "call greet()",
//       "function greet()",
//       "None of the above",
//     ],
//     correct: "greet()",
//   },
//   {
//     id: 5,
//     question:
//       "What will happen if you try to call a function before it's declared?",
//     options: [
//       "It will throw an error.",
//       "It will work if it's a function declaration.",
//       "It will always work.",
//       "None of the above",
//     ],
//     correct: "It will work if it's a function declaration.",
//   },
//   {
//     id: 6,
//     question:
//       "Which of the following is an example of passing arguments to a function?",
//     options: [
//       "function myFunction(a, b) {}",
//       "myFunction(1, 2);",
//       "Both a and b",
//       "None of the above",
//     ],
//     correct: "myFunction(1, 2);",
//   },
//   {
//     id: 7,
//     question: "What is a parameter in a function?",
//     options: [
//       "The value passed to the function.",
//       "The variable in the function definition.",
//       "The return value of the function.",
//       "None of the above",
//     ],
//     correct: "The variable in the function definition.",
//   },
//   {
//     id: 8,
//     question: "How many parameters can a function have?",
//     options: ["None", "One", "As many as needed", "Two"],
//     correct: "As many as needed",
//   },
//   {
//     id: 9,
//     question: "What is the scope of a variable declared inside a function?",
//     options: [
//       "Global",
//       "Local to the function",
//       "Local to the file",
//       "Local to the block",
//     ],
//     correct: "Local to the function",
//   },
//   {
//     id: 10,
//     question: "What is the purpose of the 'return' statement in a function?",
//     options: [
//       "To stop the function from executing.",
//       "To return a value from the function.",
//       "To declare a variable in the function.",
//       "None of the above",
//     ],
//     correct: "To return a value from the function.",
//   },
//   {
//     id: 11,
//     question: "What does the arrow function syntax look like?",
//     options: [
//       "function => myFunction() {}",
//       "() => {}",
//       "() => {}",
//       "All of the above",
//     ],
//     correct: "() => {}",
//   },
//   {
//     id: 12,
//     question: "What is the advantage of using arrow functions?",
//     options: [
//       "Simpler syntax.",
//       "Lexical 'this' binding.",
//       "Both a and b.",
//       "None of the above",
//     ],
//     correct: "Both a and b.",
//   },
//   {
//     id: 13,
//     question:
//       "What will happen if you try to access a variable declared inside a function, from outside the function?",
//     options: [
//       "It will be accessible.",
//       "It will cause an error.",
//       "It depends on the variable.",
//       "None of the above",
//     ],
//     correct: "It will cause an error.",
//   },
//   {
//     id: 14,
//     question:
//       "What is the default return value of a function if no return statement is provided?",
//     options: ["null", "undefined", "0", "An empty string"],
//     correct: "undefined",
//   },
//   {
//     id: 15,
//     question: "Can a function in JavaScript return multiple values?",
//     options: [
//       "Yes, by returning an array or object.",
//       "No, it can only return a single value.",
//       "Only in certain cases.",
//       "None of the above",
//     ],
//     correct: "Yes, by returning an array or object.",
//   },
//   {
//     id: 16,
//     question: "Which keyword is used to declare a function in JavaScript?",
//     options: ["func", "function", "def", "fun"],
//     correct: "function",
//   },
//   {
//     id: 17,
//     question: "What is a named function expression?",
//     options: [
//       "A function expression with a name.",
//       "A function expression without a name.",
//       "A function declaration with a name.",
//       "None of the above",
//     ],
//     correct: "A function expression with a name.",
//   },
//   {
//     id: 18,
//     question: "How do arrow functions differ from regular functions?",
//     options: [
//       "Arrow functions cannot have their own 'this' context.",
//       "Arrow functions have a more concise syntax.",
//       "Arrow functions cannot be used as constructors.",
//       "All of the above",
//     ],
//     correct: "All of the above",
//   },
//   {
//     id: 19,
//     question:
//       "Which of the following is true about the 'this' keyword in arrow functions?",
//     options: [
//       "'this' refers to the global object.",
//       "'this' refers to the object in which the arrow function is defined.",
//       "'this' is lexically bound.",
//       "Arrow functions do not have 'this'.",
//     ],
//     correct: "'this' is lexically bound.",
//   },
//   {
//     id: 20,
//     question: "What is a function expression?",
//     options: [
//       "A function assigned to a variable.",
//       "A function declared using the 'function' keyword.",
//       "A function declared within another function.",
//       "None of the above",
//     ],
//     correct: "A function assigned to a variable.",
//   },
//   {
//     id: 21,
//     question: "Which of the following is an example of a function expression?",
//     options: [
//       "let myFunc = function() {}",
//       "function myFunc() {}",
//       "myFunc() = function {}",
//       "None of the above",
//     ],
//     correct: "let myFunc = function() {}",
//   },
//   {
//     id: 22,
//     question: "What is the difference between parameters and arguments?",
//     options: [
//       "Parameters are values passed to a function; arguments are variables in the function.",
//       "Arguments are values passed to a function; parameters are variables in the function.",
//       "There is no difference.",
//       "None of the above",
//     ],
//     correct:
//       "Arguments are values passed to a function; parameters are variables in the function.",
//   },
//   {
//     id: 23,
//     question: "Which of the following is true about function scope?",
//     options: [
//       "Variables declared within a function are accessible outside the function.",
//       "Variables declared within a function are only accessible within the function.",
//       "Function scope does not exist in JavaScript.",
//       "None of the above",
//     ],
//     correct:
//       "Variables declared within a function are only accessible within the function.",
//   },
//   {
//     id: 24,
//     question: "What is an IIFE (Immediately Invoked Function Expression)?",
//     options: [
//       "A function that is executed as soon as it is defined.",
//       "A function that is executed later in the code.",
//       "A function that is declared but never executed.",
//       "None of the above",
//     ],
//     correct: "A function that is executed as soon as it is defined.",
//   },
//   {
//     id: 25,
//     question: "Which of the following is an example of an IIFE?",
//     options: [
//       "function myFunc() {}()",
//       "(function() {})()",
//       "() function() {}",
//       "None of the above",
//     ],
//     correct: "(function() {})()",
//   },
//   {
//     id: 26,
//     question: "Can arrow functions have default parameters?",
//     options: ["Yes", "No", "Only in ES6", "None of the above"],
//     correct: "Yes",
//   },
//   {
//     id: 27,
//     question: "How can you make a function return early?",
//     options: [
//       "By using the 'return' statement.",
//       "By using the 'break' statement.",
//       "By using the 'exit' statement.",
//       "None of the above",
//     ],
//     correct: "By using the 'return' statement.",
//   },
//   {
//     id: 28,
//     question: "What is function hoisting?",
//     options: [
//       "The ability to call a function before it is declared.",
//       "The ability to declare a function after it is called.",
//       "Both a and b.",
//       "None of the above",
//     ],
//     correct: "The ability to call a function before it is declared.",
//   },
//   {
//     id: 29,
//     question:
//       "What will be the output of the following code?\n\nfunction add(a, b) { return a + b; }\nconsole.log(add(2, 3));",
//     options: ["2", "3", "5", "undefined"],
//     correct: "5",
//   },
//   {
//     id: 30,
//     question: "Can a function be assigned to a variable in JavaScript?",
//     options: ["Yes", "No", "Only in ES6", "None of the above"],
//     correct: "Yes",
//   },
//   {
//     id: 31,
//     question:
//       "What does the following arrow function return?\n\nlet sum = (a, b) => a + b;\nconsole.log(sum(2, 3));",
//     options: ["5", "2", "3", "undefined"],
//     correct: "5",
//   },
//   {
//     id: 32,
//     question: "What is lexical scope?",
//     options: [
//       "The ability of a function to access variables from the scope it was created in.",
//       "The scope of variables within a function.",
//       "The scope of variables within a block.",
//       "None of the above",
//     ],
//     correct:
//       "The ability of a function to access variables from the scope it was created in.",
//   },
//   {
//     id: 33,
//     question:
//       "How do you define a function with a single parameter using arrow function syntax?",
//     options: [
//       "() => parameter",
//       "(parameter) => {}",
//       "parameter => {}",
//       "None of the above",
//     ],
//     correct: "parameter => {}",
//   },
//   {
//     id: 34,
//     question: "What is the 'arguments' object in a function?",
//     options: [
//       "An array-like object that contains all the arguments passed to the function.",
//       "A keyword to access function parameters.",
//       "An object passed as an argument to a function.",
//       "None of the above",
//     ],
//     correct:
//       "An array-like object that contains all the arguments passed to the function.",
//   },
//   {
//     id: 35,
//     question: "Can arrow functions use the 'arguments' object?",
//     options: [
//       "Yes",
//       "No",
//       "Only if they have parameters.",
//       "None of the above",
//     ],
//     correct: "No",
//   },
//   {
//     id: 36,
//     question:
//       "Which of the following is true about the 'this' keyword in a regular function?",
//     options: [
//       "'this' refers to the global object.",
//       "'this' refers to the object that called the function.",
//       "'this' is undefined.",
//       "None of the above",
//     ],
//     correct: "'this' refers to the object that called the function.",
//   },
//   {
//     id: 37,
//     question:
//       "Which of the following is a benefit of using named function expressions?",
//     options: [
//       "They are easier to debug.",
//       "They are hoisted.",
//       "They are always faster.",
//       "All of the above",
//     ],
//     correct: "They are easier to debug.",
//   },
//   {
//     id: 38,
//     question:
//       "What will be the output of the following code?\n\nlet myFunc = function() { return 1; };\nconsole.log(myFunc());",
//     options: ["1", "undefined", "null", "It will throw an error."],
//     correct: "1",
//   },
//   {
//     id: 39,
//     question: "Which of the following statements is true?",
//     options: [
//       "A function can be passed as an argument to another function.",
//       "A function cannot return another function.",
//       "Functions cannot be stored in variables.",
//       "None of the above",
//     ],
//     correct: "A function can be passed as an argument to another function.",
//   },
//   {
//     id: 40,
//     question:
//       "What does the following code do?\n\n(function() { console.log('Hello!'); })();",
//     options: [
//       "Defines a function.",
//       "Defines and immediately calls the function.",
//       "Throws an error.",
//       "None of the above",
//     ],
//     correct: "Defines and immediately calls the function.",
//   },
//   {
//     id: 41,
//     question:
//       "Which of the following is a correct way to define a function with default parameters?",
//     options: [
//       "function myFunc(a = 1, b = 2) {}",
//       "function myFunc(a == 1, b == 2) {}",
//       "function myFunc(a : 1, b : 2) {}",
//       "None of the above",
//     ],
//     correct: "function myFunc(a = 1, b = 2) {}",
//   },
//   {
//     id: 42,
//     question: "Which of the following is NOT true about arrow functions?",
//     options: [
//       "Arrow functions have a concise syntax.",
//       "Arrow functions can be used as constructors.",
//       "Arrow functions do not have their own 'this' context.",
//       "Arrow functions are always anonymous.",
//     ],
//     correct: "Arrow functions can be used as constructors.",
//   },
//   {
//     id: 43,
//     question:
//       "What will the following code output?\n\nfunction greet() { return 'Hello'; }\nconsole.log(typeof greet);",
//     options: ["'function'", "'string'", "'object'", "'undefined'"],
//     correct: "'function'",
//   },
//   {
//     id: 44,
//     question: "What is function chaining?",
//     options: [
//       "Calling multiple functions in a single line of code.",
//       "Calling a function within another function.",
//       "Using multiple functions in an array.",
//       "None of the above",
//     ],
//     correct: "Calling multiple functions in a single line of code.",
//   },
//   {
//     id: 45,
//     question: "What is the primary advantage of using closures in JavaScript?",
//     options: [
//       "They help in data encapsulation.",
//       "They make code run faster.",
//       "They are required for recursion.",
//       "None of the above",
//     ],
//     correct: "They help in data encapsulation.",
//   },
//   {
//     id: 46,
//     question: "Which of the following is NOT a valid way to call a function?",
//     options: ["myFunc()", "new myFunc()", "myFunc.call()", "None of the above"],
//     correct: "None of the above",
//   },
//   {
//     id: 47,
//     question:
//       "What will be the output of the following code?\n\nfunction add(a, b) { return a + b; }\nlet result = add.call(null, 1, 2);\nconsole.log(result);",
//     options: ["1", "2", "3", "undefined"],
//     correct: "3",
//   },
//   {
//     id: 48,
//     question:
//       "What will the following code output?\n\nlet x = function(a, b) { return a * b; };\nconsole.log(typeof x);",
//     options: ["'function'", "'number'", "'object'", "'undefined'"],
//     correct: "'function'",
//   },
//   {
//     id: 49,
//     question: "Which of the following statements is true?",
//     options: [
//       "JavaScript functions can have default parameters.",
//       "Functions in JavaScript cannot return another function.",
//       "Arrow functions must have a return statement.",
//       "None of the above",
//     ],
//     correct: "JavaScript functions can have default parameters.",
//   },
//   {
//     id: 50,
//     question:
//       "What does the following code output?\n\nfunction myFunc() {\n  var x = 10;\n  if (true) {\n    let y = 20;\n    console.log(x + y);\n  }\n  console.log(y);\n}\n\nmyFunc();",
//     options: [
//       "30 followed by an error",
//       "30 followed by 20",
//       "30 followed by undefined",
//       "None of the above",
//     ],
//     correct: "30 followed by an error",
//   },
// ];

// const quizQuestions = [
//   {
//     id: 1,
//     question: "What does the assignment operator '=' do in JavaScript?",
//     options: [
//       "Compares two values",
//       "Assigns a value to a variable",
//       "Increases a variable by 1",
//       "Multiplies two values",
//     ],
//     correct: "Assigns a value to a variable",
//   },
//   {
//     id: 2,
//     question: "Which operator is used to add two numbers in JavaScript?",
//     options: ["+", "-", "*", "/"],
//     correct: "+",
//   },
//   {
//     id: 3,
//     question: "What does the '===' operator compare?",
//     options: ["Value and type", "Only value", "Only type", "Memory address"],
//     correct: "Value and type",
//   },
//   {
//     id: 4,
//     question:
//       "Which operator would you use to find the remainder of a division?",
//     options: ["%", "/", "*", "-"],
//     correct: "%",
//   },
//   {
//     id: 5,
//     question: "What is the result of the expression '10 % 3' in JavaScript?",
//     options: ["0", "1", "2", "3"],
//     correct: "1",
//   },
//   {
//     id: 6,
//     question: "What does the '&&' operator do?",
//     options: [
//       "Performs a logical AND",
//       "Performs a logical OR",
//       "Negates a boolean value",
//       "Compares two values",
//     ],
//     correct: "Performs a logical AND",
//   },
//   {
//     id: 7,
//     question: "Which operator is used to concatenate two strings?",
//     options: ["+", "-", "&", "/"],
//     correct: "+",
//   },
//   {
//     id: 8,
//     question: "What is the result of the expression '5 > 3'?",
//     options: ["true", "false", "undefined", "null"],
//     correct: "true",
//   },
//   {
//     id: 9,
//     question: "Which operator is used to check if two values are not equal?",
//     options: ["!=", "==", "===", "="],
//     correct: "!=",
//   },
//   {
//     id: 10,
//     question: "What is the result of the expression '3 <= 2'?",
//     options: ["true", "false", "undefined", "null"],
//     correct: "false",
//   },
//   {
//     id: 11,
//     question: "Which operator is used to decrement a variable by 1?",
//     options: ["--", "++", "-", "="],
//     correct: "--",
//   },
//   {
//     id: 12,
//     question: "What does the '||' operator do?",
//     options: [
//       "Performs a logical OR",
//       "Performs a logical AND",
//       "Negates a boolean value",
//       "Assigns a value",
//     ],
//     correct: "Performs a logical OR",
//   },
//   {
//     id: 13,
//     question: "Which of the following is a conditional (ternary) operator?",
//     options: ["?:", "==", "&&", "||"],
//     correct: "?:",
//   },
//   {
//     id: 14,
//     question: "What does the '+=' operator do?",
//     options: [
//       "Adds and assigns the result",
//       "Subtracts and assigns the result",
//       "Multiplies and assigns the result",
//       "Divides and assigns the result",
//     ],
//     correct: "Adds and assigns the result",
//   },
//   {
//     id: 15,
//     question: "Which operator checks if two values are both true?",
//     options: ["&&", "||", "==", "!="],
//     correct: "&&",
//   },
//   {
//     id: 16,
//     question: "What does the '===' operator return when comparing 5 and '5'?",
//     options: ["false", "true", "undefined", "null"],
//     correct: "false",
//   },
//   {
//     id: 17,
//     question: "Which operator is used to multiply two numbers?",
//     options: ["*", "+", "/", "-"],
//     correct: "*",
//   },
//   {
//     id: 18,
//     question: "What is the result of the expression '4 * 2'?",
//     options: ["6", "8", "10", "12"],
//     correct: "8",
//   },
//   {
//     id: 19,
//     question: "Which operator is used to divide two numbers?",
//     options: ["/", "*", "+", "-"],
//     correct: "/",
//   },
//   {
//     id: 20,
//     question: "What is the result of the expression '10 / 2'?",
//     options: ["4", "5", "10", "20"],
//     correct: "5",
//   },
//   {
//     id: 21,
//     question: "What does the '==' operator compare?",
//     options: ["Only value", "Only type", "Value and type", "Memory address"],
//     correct: "Only value",
//   },
//   {
//     id: 22,
//     question:
//       "What does the 'typeof' operator return for the expression 'typeof 42'?",
//     options: ["'number'", "'string'", "'boolean'", "'undefined'"],
//     correct: "'number'",
//   },
//   {
//     id: 23,
//     question: "What is the purpose of the '!= ' operator?",
//     options: [
//       "To compare if two values are not equal",
//       "To compare if two values are equal",
//       "To check the type of a variable",
//       "To increment a variable by 1",
//     ],
//     correct: "To compare if two values are not equal",
//   },
//   {
//     id: 24,
//     question: "Which operator is used to subtract one value from another?",
//     options: ["-", "+", "*", "/"],
//     correct: "-",
//   },
//   {
//     id: 25,
//     question: "What is the result of the expression '10 - 4'?",
//     options: ["4", "6", "10", "14"],
//     correct: "6",
//   },
//   {
//     id: 26,
//     question: "What does the '===' operator ensure?",
//     options: [
//       "Strict equality of value and type",
//       "Loose equality of value",
//       "Only type equality",
//       "None of the above",
//     ],
//     correct: "Strict equality of value and type",
//   },
//   {
//     id: 27,
//     question:
//       "Which operator is used to check if a value is less than or equal to another?",
//     options: ["<=", ">=", "<", ">"],
//     correct: "<=",
//   },
//   {
//     id: 28,
//     question: "What is the result of the expression '8 >= 8'?",
//     options: ["true", "false", "undefined", "null"],
//     correct: "true",
//   },
//   {
//     id: 29,
//     question:
//       "What does the '||' operator return if the first operand is true?",
//     options: ["true", "false", "undefined", "null"],
//     correct: "true",
//   },
//   {
//     id: 30,
//     question: "What is the purpose of the 'instanceof' operator?",
//     options: [
//       "To check if an object is an instance of a specific class or constructor",
//       "To compare two values",
//       "To increment a value",
//       "To assign a value",
//     ],
//     correct:
//       "To check if an object is an instance of a specific class or constructor",
//   },
// ];

// const quizQuestions = [
//   {
//     id: 1,
//     question: "What is an array in JavaScript?",
//     options: [
//       "A type of variable that can store multiple values",
//       "A single value data type",
//       "A function that performs calculations",
//       "A method used to sort data",
//     ],
//     correct: "A type of variable that can store multiple values",
//   },
//   {
//     id: 2,
//     question: "How do you create an array using array literals?",
//     options: [
//       "let arr = [];",
//       "let arr = {};",
//       "let arr = () => [];",
//       "let arr = '';",
//     ],
//     correct: "let arr = [];",
//   },
//   {
//     id: 3,
//     question: "What is the purpose of the Array constructor?",
//     options: [
//       "To create a new array with a specified number of elements",
//       "To loop through an array",
//       "To convert a string into an array",
//       "To sort an array",
//     ],
//     correct: "To create a new array with a specified number of elements",
//   },
//   {
//     id: 4,
//     question:
//       "Which method is used to add a new element to the end of an array?",
//     options: ["push()", "pop()", "shift()", "unshift()"],
//     correct: "push()",
//   },
//   {
//     id: 5,
//     question: "How do you access the first element of an array named 'arr'?",
//     options: ["arr[0]", "arr[1]", "arr.first()", "arr.get(1)"],
//     correct: "arr[0]",
//   },
//   {
//     id: 6,
//     question: "What does the 'pop()' method do?",
//     options: [
//       "Removes the last element from an array",
//       "Adds a new element to the end of an array",
//       "Removes the first element from an array",
//       "Sorts the elements in an array",
//     ],
//     correct: "Removes the last element from an array",
//   },
//   {
//     id: 7,
//     question:
//       "What is the difference between arrays and objects in JavaScript?",
//     options: [
//       "Arrays store ordered lists of values, while objects store key-value pairs",
//       "Objects store ordered lists of values, while arrays store key-value pairs",
//       "Arrays are faster than objects",
//       "Objects can only hold primitive data types",
//     ],
//     correct:
//       "Arrays store ordered lists of values, while objects store key-value pairs",
//   },
//   {
//     id: 8,
//     question:
//       "Which method is used to add a new element to the beginning of an array?",
//     options: ["unshift()", "push()", "shift()", "pop()"],
//     correct: "unshift()",
//   },
//   {
//     id: 9,
//     question: "How can you find the length of an array named 'arr'?",
//     options: ["arr.length", "arr.size()", "arr.getLength()", "arr.len"],
//     correct: "arr.length",
//   },
//   {
//     id: 10,
//     question:
//       "What is the index of the last element in an array with 5 elements?",
//     options: ["4", "5", "3", "0"],
//     correct: "4",
//   },
//   {
//     id: 11,
//     question: "How do you update the third element in an array named 'arr'?",
//     options: [
//       "arr[2] = newValue",
//       "arr[3] = newValue",
//       "arr.set(2, newValue)",
//       "arr[1] = newValue",
//     ],
//     correct: "arr[2] = newValue",
//   },
//   {
//     id: 12,
//     question: "Which method removes the first element from an array?",
//     options: ["shift()", "pop()", "unshift()", "push()"],
//     correct: "shift()",
//   },
//   {
//     id: 13,
//     question: "What does 'arr.length = 0' do?",
//     options: [
//       "Clears all elements from the array",
//       "Sets the first element to 0",
//       "Throws an error",
//       "Creates an empty array",
//     ],
//     correct: "Clears all elements from the array",
//   },
//   {
//     id: 14,
//     question: "How do you create an empty array using the Array constructor?",
//     options: [
//       "let arr = new Array();",
//       "let arr = new Array[];",
//       "let arr = Array();",
//       "let arr = new Array[];",
//     ],
//     correct: "let arr = new Array();",
//   },
//   {
//     id: 15,
//     question: "What does the 'splice()' method do?",
//     options: [
//       "Adds and/or removes elements from an array",
//       "Removes the first element from an array",
//       "Sorts the elements in an array",
//       "Finds the index of an element in an array",
//     ],
//     correct: "Adds and/or removes elements from an array",
//   },
//   {
//     id: 16,
//     question: "How do you find the index of an element in an array?",
//     options: ["indexOf()", "findIndex()", "find()", "filter()"],
//     correct: "indexOf()",
//   },
//   {
//     id: 17,
//     question: "What is the purpose of the 'join()' method?",
//     options: [
//       "To combine all elements of an array into a string",
//       "To add elements to an array",
//       "To remove elements from an array",
//       "To find the index of an element in an array",
//     ],
//     correct: "To combine all elements of an array into a string",
//   },
//   {
//     id: 18,
//     question: "What does the 'concat()' method do?",
//     options: [
//       "Merges two or more arrays",
//       "Removes the last element from an array",
//       "Adds a new element to an array",
//       "Splits an array into sub-arrays",
//     ],
//     correct: "Merges two or more arrays",
//   },
//   {
//     id: 19,
//     question: "What does 'arr.length = 2' do to an array with 5 elements?",
//     options: [
//       "It truncates the array to 2 elements",
//       "It adds 2 more elements to the array",
//       "It throws an error",
//       "It does nothing",
//     ],
//     correct: "It truncates the array to 2 elements",
//   },
//   {
//     id: 20,
//     question: "Which method reverses the order of elements in an array?",
//     options: ["reverse()", "sort()", "map()", "filter()"],
//     correct: "reverse()",
//   },
//   {
//     id: 21,
//     question: "What is the purpose of the 'push()' method?",
//     options: [
//       "To add an element to the end of an array",
//       "To remove an element from the end of an array",
//       "To add an element to the beginning of an array",
//       "To remove an element from the beginning of an array",
//     ],
//     correct: "To add an element to the end of an array",
//   },
//   {
//     id: 22,
//     question: "How do you remove the last element from an array named 'arr'?",
//     options: ["arr.pop()", "arr.push()", "arr.shift()", "arr.unshift()"],
//     correct: "arr.pop()",
//   },
//   {
//     id: 23,
//     question: "What does the 'slice()' method do?",
//     options: [
//       "Returns a shallow copy of a portion of an array",
//       "Adds elements to the beginning of an array",
//       "Reverses the order of elements in an array",
//       "Removes the first element of an array",
//     ],
//     correct: "Returns a shallow copy of a portion of an array",
//   },
//   {
//     id: 24,
//     question: "What does the 'map()' method return?",
//     options: [
//       "A new array with the results of applying a function to each element",
//       "The original array, with changes applied",
//       "The index of the first element that satisfies a condition",
//       "The sum of all elements in the array",
//     ],
//     correct:
//       "A new array with the results of applying a function to each element",
//   },
//   {
//     id: 25,
//     question: "How do you add an element to the start of an array named 'arr'?",
//     options: ["arr.unshift()", "arr.push()", "arr.pop()", "arr.shift()"],
//     correct: "arr.unshift()",
//   },

//   {
//     id: 27,
//     question: "What does 'Array.isArray(arr)' check?",
//     options: [
//       "Whether 'arr' is an array",
//       "The length of 'arr'",
//       "If 'arr' contains only numbers",
//       "Whether 'arr' is empty",
//     ],
//     correct: "Whether 'arr' is an array",
//   },
//   {
//     id: 28,
//     question: "What does the 'filter()' method do?",
//     options: [
//       "Creates a new array with all elements that pass a test",
//       "Returns the first element that passes a test",
//       "Removes all elements that pass a test",
//       "Sorts the elements of an array",
//     ],
//     correct: "Creates a new array with all elements that pass a test",
//   },
//   {
//     id: 29,
//     question: "Which method would you use to sort elements in an array?",
//     options: ["sort()", "map()", "filter()", "reverse()"],
//     correct: "sort()",
//   },
//   {
//     id: 30,
//     question:
//       "What is the output of 'arr.indexOf(3)' if 'arr' is [1, 2, 3, 4]?",
//     options: ["2", "3", "1", "-1"],
//     correct: "2",
//   },
//   {
//     id: 31,
//     question: "How do you copy an array named 'arr'?",
//     options: ["arr.slice()", "arr.copy()", "arr.duplicate()", "arr.map()"],
//     correct: "arr.slice()",
//   },
//   {
//     id: 32,
//     question: "Which of the following creates a 2D array in JavaScript?",
//     options: [
//       "let arr = [[1, 2], [3, 4]];",
//       "let arr = [1, 2, 3, 4];",
//       "let arr = new Array(2);",
//       "let arr = Array.of(1, 2, 3, 4);",
//     ],
//     correct: "let arr = [[1, 2], [3, 4]];",
//   },
//   {
//     id: 33,
//     question: "What does 'arr.includes(2)' return if 'arr' is [1, 2, 3]?",
//     options: ["true", "false", "2", "undefined"],
//     correct: "true",
//   },
//   {
//     id: 34,
//     question: "How can you merge two arrays 'arr1' and 'arr2'?",
//     options: [
//       "arr1.concat(arr2)",
//       "arr1.push(arr2)",
//       "arr1.merge(arr2)",
//       "arr1 + arr2",
//     ],
//     correct: "arr1.concat(arr2)",
//   },
//   {
//     id: 35,
//     question: "What is the purpose of the 'reduce()' method?",
//     options: [
//       "To apply a function to each element and reduce the array to a single value",
//       "To remove all elements from an array",
//       "To sort elements in an array",
//       "To find the maximum value in an array",
//     ],
//     correct:
//       "To apply a function to each element and reduce the array to a single value",
//   },
//   {
//     id: 36,
//     question:
//       "What does 'arr.findIndex(x => x === 3)' return if 'arr' is [1, 2, 3, 4]?",
//     options: ["2", "3", "1", "-1"],
//     correct: "2",
//   },
// ];

// const quizQuestions = [
//   {
//     id: 1,
//     question: "What is an array in JavaScript?",
//     options: [
//       "A collection of elements identified by a single variable name",
//       "A collection of key-value pairs",
//       "A function that returns multiple values",
//       "A single string of characters",
//     ],
//     correct: "A collection of elements identified by a single variable name",
//   },
//   {
//     id: 2,
//     question: "How does an array differ from an object?",
//     options: [
//       "Arrays use numeric indices, while objects use named keys",
//       "Arrays can only hold numbers, while objects can hold any data type",
//       "Arrays are immutable, while objects are mutable",
//       "There is no difference between arrays and objects",
//     ],
//     correct: "Arrays use numeric indices, while objects use named keys",
//   },
//   {
//     id: 3,
//     question:
//       "Which of the following is a correct way to create an array using an array literal?",
//     options: [
//       "let arr = [1, 2, 3];",
//       "let arr = new Array(1, 2, 3);",
//       "let arr = Array(1, 2, 3);",
//       "let arr = {1, 2, 3};",
//     ],
//     correct: "let arr = [1, 2, 3];",
//   },
//   {
//     id: 4,
//     question: "How do you create an array using the Array constructor?",
//     options: [
//       "let arr = new Array(1, 2, 3);",
//       "let arr = [1, 2, 3];",
//       "let arr = {1, 2, 3};",
//       "let arr = Array.create(1, 2, 3);",
//     ],
//     correct: "let arr = new Array(1, 2, 3);",
//   },
//   {
//     id: 5,
//     question:
//       "Which method would you use to access the first element of an array 'arr'?",
//     options: ["arr[0]", "arr[1]", "arr.first()", "arr.first"],
//     correct: "arr[0]",
//   },
//   {
//     id: 6,
//     question: "What does 'arr.length' return if 'arr' is [1, 2, 3, 4]?",
//     options: ["4", "3", "5", "2"],
//     correct: "4",
//   },
//   {
//     id: 7,
//     question: "How do you update the second element of an array 'arr' to 10?",
//     options: [
//       "arr[1] = 10;",
//       "arr[2] = 10;",
//       "arr.update(1, 10);",
//       "arr.update(2, 10);",
//     ],
//     correct: "arr[1] = 10;",
//   },
//   {
//     id: 8,
//     question:
//       "What happens if you set the length of an array to a value smaller than its current length?",
//     options: [
//       "The array is truncated, removing elements beyond the new length",
//       "The array length increases, adding undefined elements",
//       "An error is thrown",
//       "Nothing happens",
//     ],
//     correct: "The array is truncated, removing elements beyond the new length",
//   },
//   {
//     id: 9,
//     question: "How do you remove the last element of an array?",
//     options: ["arr.pop()", "arr.shift()", "arr.remove()", "arr.splice()"],
//     correct: "arr.pop()",
//   },
//   {
//     id: 10,
//     question: "Which method adds a new element to the beginning of an array?",
//     options: ["unshift()", "push()", "shift()", "pop()"],
//     correct: "unshift()",
//   },
//   {
//     id: 11,
//     question: "How do you add a new element to the end of an array?",
//     options: ["arr.push()", "arr.pop()", "arr.unshift()", "arr.shift()"],
//     correct: "arr.push()",
//   },
//   {
//     id: 12,
//     question: "How can you delete the first element of an array?",
//     options: ["arr.shift()", "arr.pop()", "arr.unshift()", "arr.remove(0)"],
//     correct: "arr.shift()",
//   },
//   {
//     id: 13,
//     question: "What is the result of 'arr.push(5)' if 'arr' is [1, 2, 3]?",
//     options: ["[1, 2, 3, 5]", "[5, 1, 2, 3]", "[1, 2, 5]", "[1, 5, 2, 3]"],
//     correct: "[1, 2, 3, 5]",
//   },
//   {
//     id: 14,
//     question: "What is the result of 'arr.pop()' if 'arr' is [1, 2, 3]?",
//     options: ["3", "1", "2", "[1, 2, 3]"],
//     correct: "3",
//   },
//   {
//     id: 15,
//     question: "Which method is used to add elements to the end of an array?",
//     options: ["push()", "pop()", "shift()", "unshift()"],
//     correct: "push()",
//   },
//   {
//     id: 16,
//     question: "How can you find the length of an array?",
//     options: ["arr.length", "arr.size", "arr.count", "arr.length()"],
//     correct: "arr.length",
//   },
//   {
//     id: 17,
//     question: "What will 'arr[3]' return if 'arr' is [1, 2, 3]?",
//     options: ["undefined", "3", "0", "1"],
//     correct: "undefined",
//   },
//   {
//     id: 18,
//     question: "How do you modify the length of an array?",
//     options: [
//       "arr.length = newLength",
//       "arr.setLength(newLength)",
//       "arr.resize(newLength)",
//       "arr.length(newLength)",
//     ],
//     correct: "arr.length = newLength",
//   },
//   {
//     id: 19,
//     question: "Which method is used to remove the last element from an array?",
//     options: ["pop()", "push()", "shift()", "unshift()"],
//     correct: "pop()",
//   },
//   {
//     id: 20,
//     question: "How do you add an element to the start of an array?",
//     options: ["unshift()", "shift()", "push()", "pop()"],
//     correct: "unshift()",
//   },
//   {
//     id: 21,
//     question: "How do you delete the first element of an array?",
//     options: ["arr.shift()", "arr.pop()", "arr.unshift()", "arr.splice(0, 1)"],
//     correct: "arr.shift()",
//   },
//   {
//     id: 22,
//     question: "What is the result of 'arr.unshift(0)' if 'arr' is [1, 2, 3]?",
//     options: ["[0, 1, 2, 3]", "[1, 2, 3, 0]", "[1, 0, 2, 3]", "[0, 3, 2, 1]"],
//     correct: "[0, 1, 2, 3]",
//   },
//   {
//     id: 23,
//     question: "How can you remove multiple elements from an array?",
//     options: [
//       "Using splice()",
//       "Using pop() multiple times",
//       "Using shift() multiple times",
//       "Using unshift() with negative values",
//     ],
//     correct: "Using splice()",
//   },
//   {
//     id: 24,
//     question: "What is the difference between 'push()' and 'unshift()'?",
//     options: [
//       "'push()' adds elements to the end, 'unshift()' adds elements to the beginning",
//       "'push()' adds elements to the beginning, 'unshift()' adds elements to the end",
//       "'push()' removes elements from the end, 'unshift()' removes elements from the beginning",
//       "'push()' removes elements from the beginning, 'unshift()' removes elements from the end",
//     ],
//     correct:
//       "'push()' adds elements to the end, 'unshift()' adds elements to the beginning",
//   },
//   {
//     id: 25,
//     question: "How do you remove an element from a specific index in an array?",
//     options: [
//       "Using splice()",
//       "Using pop()",
//       "Using shift()",
//       "Using unshift()",
//     ],
//     correct: "Using splice()",
//   },
// ];

const quizQuestions = [
  {
    id: 1,
    question: "Which of the following is a primitive data type in JavaScript?",
    options: ["Object", "Array", "Number", "Function"],
    correct: "Number",
  },
  {
    id: 2,
    question: "What is the correct syntax to declare a variable in JavaScript?",
    options: ["var x = 10;", "let x: 10;", "const x = 10;", "int x = 10;"],
    correct: "var x = 10;",
  },
  {
    id: 3,
    question:
      "Which method is used to convert a string to a number in JavaScript?",
    options: ["toNumber()", "parseInt()", "convert()", "parseString()"],
    correct: "parseInt()",
  },
  {
    id: 4,
    question: "What does the `typeof` operator do in JavaScript?",
    options: [
      "Checks the type of a variable",
      "Declares a new variable",
      "Converts data types",
      "None of the above",
    ],
    correct: "Checks the type of a variable",
  },
  {
    id: 5,
    question:
      "Which of the following is used to define a function in JavaScript?",
    options: [
      "func myFunction(){}",
      "function myFunction(){}",
      "def myFunction(){}",
      "declare myFunction(){}",
    ],
    correct: "function myFunction(){}",
  },
  {
    id: 6,
    question: "Which data structure is used to store a list of values?",
    options: ["Array", "Object", "Function", "Boolean"],
    correct: "Array",
  },
  {
    id: 7,
    question:
      "How do you access the third element in an array named `myArray`?",
    options: ["myArray[2]", "myArray[3]", "myArray(2)", "myArray[1]"],
    correct: "myArray[2]",
  },
  {
    id: 8,
    question: "What will `console.log(2 + '2')` output?",
    options: ["22", "4", "undefined", "NaN"],
    correct: "22",
  },
  {
    id: 9,
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["==", "===", "!=", "="],
    correct: "===",
  },
  {
    id: 10,
    question: "What will `typeof []` return in JavaScript?",
    options: ["object", "array", "undefined", "list"],
    correct: "object",
  },
  {
    id: 11,
    question: "How do you declare a constant in JavaScript?",
    options: ["let", "var", "const", "constant"],
    correct: "const",
  },
  {
    id: 12,
    question: "Which of the following is an array method?",
    options: ["push()", "toString()", "parse()", "join()"],
    correct: "push()",
  },
  {
    id: 13,
    question: "What is the output of `typeof null`?",
    options: ["object", "null", "undefined", "boolean"],
    correct: "object",
  },
  {
    id: 14,
    question: "Which of the following is not a data type in JavaScript?",
    options: ["String", "Number", "Character", "Boolean"],
    correct: "Character",
  },
  {
    id: 15,
    question: "How do you add a property to a JavaScript object?",
    options: [
      "object.property = value",
      "addProperty(object, property, value)",
      "object.addProperty(property, value)",
      "object(property, value)",
    ],
    correct: "object.property = value",
  },
  {
    id: 16,
    question: "What will `console.log(3 == '3')` output?",
    options: ["true", "false", "undefined", "null"],
    correct: "true",
  },
  {
    id: 17,
    question: "What will `console.log(3 === '3')` output?",
    options: ["true", "false", "undefined", "null"],
    correct: "false",
  },
  {
    id: 18,
    question: "Which of the following is used to handle errors in JavaScript?",
    options: ["try-catch", "if-else", "switch-case", "for-loop"],
    correct: "try-catch",
  },
  {
    id: 19,
    question: "Which keyword is used to return a value from a function?",
    options: ["return", "yield", "break", "exit"],
    correct: "return",
  },
  {
    id: 20,
    question: "How do you create an empty object in JavaScript?",
    options: ["{}", "[]", "()", "null"],
    correct: "{}",
  },
  {
    id: 21,
    question: "What will `Boolean(0)` return?",
    options: ["false", "true", "undefined", "null"],
    correct: "false",
  },
  {
    id: 22,
    question: "Which of the following is a valid function declaration?",
    options: ["function(){}", "func(){}", "myFunction{}", "declare func()"],
    correct: "function(){}",
  },
  {
    id: 23,
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "shift()", "splice()", "remove()"],
    correct: "pop()",
  },
  {
    id: 24,
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", "!"],
    correct: "=",
  },
  {
    id: 25,
    question: "Which of the following is used to loop over an array?",
    options: ["forEach()", "map()", "reduce()", "all of the above"],
    correct: "forEach()",
  },
  {
    id: 26,
    question: "What will `NaN === NaN` return?",
    options: ["false", "true", "undefined", "null"],
    correct: "false",
  },
  {
    id: 27,
    question: "Which method is used to convert an object to a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "toString()",
      "JSON.convert()",
    ],
    correct: "JSON.stringify()",
  },
  {
    id: 28,
    question: "Which method is used to convert a JSON string to an object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "parseJSON()",
    ],
    correct: "JSON.parse()",
  },
  {
    id: 29,
    question: "What is the scope of variables declared with `var`?",
    options: [
      "Global or function scope",
      "Block scope",
      "Only global scope",
      "Local scope only",
    ],
    correct: "Global or function scope",
  },
  {
    id: 30,
    question: "Which of the following is used to check if a value is NaN?",
    options: ["isNaN()", "isNumber()", "isValid()", "NaN()"],
    correct: "isNaN()",
  },
  {
    id: 31,
    question: "Which statement is used to stop a loop prematurely?",
    options: ["break", "continue", "return", "exit"],
    correct: "break",
  },
  {
    id: 32,
    question: "Which array method is used to add an element at the start?",
    options: ["unshift()", "push()", "shift()", "splice()"],
    correct: "unshift()",
  },
  {
    id: 33,
    question: "What is the correct syntax for an arrow function?",
    options: ["()=>{}", "function=>{}", "=>{}", "()->{}"],
    correct: "()=>{}",
  },
  {
    id: 34,
    question: "What will `console.log(null == undefined)` return?",
    options: ["true", "false", "undefined", "null"],
    correct: "true",
  },
  {
    id: 35,
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["let", "var", "const", "define"],
    correct: "let",
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
