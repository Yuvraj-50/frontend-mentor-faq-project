const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) =>
  question.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    const answer = li.querySelector(".answer");
    const icon = li.querySelector(".arrow");
    answer.classList.toggle("hidden");
    question.classList.toggle("active");
    icon.classList.toggle("arrow-active");
  })
);
