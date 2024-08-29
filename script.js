let preload = document.querySelector(".preload");
let startBtn = document.querySelector("#start_btn");
let quizRulesCard = document.querySelector("#quiz_rules");
let quizCard = document.querySelector("#quiz_card");
let continueBtn = document.querySelector("#continueBtn");
let exitBtn = document.querySelector("#exitBtn");
const countdownText = document.getElementById("countdownText");
const countdownNum = document.getElementById("countdownNum");
const countdownContainer = document.querySelector(".count-down-container ");

window.addEventListener("load", function () {
  this.setTimeout(() => {
    preload.style.display = "none";
    startBtn.classList.remove("hidden");
  }, 1000);
});

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  preload.style.display = "flex";
  this.setTimeout(() => {
    quizRulesCard.classList.remove("hidden");
  }, 1000);
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
      }, 500);
    }
  }, 1000);
}
