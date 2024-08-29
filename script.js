let preload = document.querySelector(".preload");
let startBtn = document.querySelector("#start_btn");
let quizRulesCard = document.querySelector("#quiz_rules");
let exitBtn = document.querySelector("#exitBtn");

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
