const quizFrom = document.getElementById("quiz-form");

const brainStorm = quizFrom.querySelector("#brainstorm");

const button = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();
  if (brainStorm.value !== "브레인스톰") brainStorm.value = "";
  button.style.backgroundColor = "#E2DCC8";
  button.style.color = "#5a8f7b";
  setTimeout(() => {
    button.style.backgroundColor = "#5a8f7b";
    button.style.color = "#E2DCC8";
  }, 10);
}

quizFrom.addEventListener("submit", handleSubmit);
