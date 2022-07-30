const quizFrom = document.getElementById("quiz-form");

const flex = quizFrom.querySelector("#flex");
const flexDirection = quizFrom.querySelector("#flex-direction");
const justifyContent = quizFrom.querySelector("#justify-content");
const alignItem = quizFrom.querySelector("#align-item");

const button = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();
  if (flex.value !== "flex") flex.value = "";
  if (flexDirection.value !== "flex-direction") flexDirection.value = "";
  if (justifyContent.value !== "justify-content") justifyContent.value = "";
  if (alignItem.value !== "align-item") alignItem.value = "";
  button.style.backgroundColor = "#E2DCC8";
  button.style.color = "#5a8f7b";
  setTimeout(() => {
    button.style.backgroundColor = "#5a8f7b";
    button.style.color = "#E2DCC8";
  }, 10);
}

quizFrom.addEventListener("submit", handleSubmit);
