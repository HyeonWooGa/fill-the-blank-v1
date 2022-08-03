const quizFrom = document.getElementById("quiz-form");

const brainStorm = quizFrom.querySelector("#brainstorm");

const button = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();
  if (brainStorm.value === "브레인스톰") {
    brainStorm.classList.add("success");
    brainStorm.classList.remoce("blank");
    brainStorm.classList.remove("Fail");
  }
  else if (brainStorm.value === "" || brainStorm.value === "빈칸입니다.") {
    brainStorm.classList.add("blank");
    brainStorm.classList.remove("success");
    brainStorm.classList.remove("Fail");
    brainStorm.value = "빈칸입니다."
  }
  else {
    brainStorm.classList.add("Fail");
    brainStorm.classList.remove("blank");
    brainStorm.classList.remove("success");
    brainStorm.value = "오답입니다."
  }
  button.style.backgroundColor = "#E2DCC8";
  button.style.color = "#5a8f7b";
  setTimeout(() => {
    button.style.backgroundColor = "#5a8f7b";
    button.style.color = "#E2DCC8";
  }, 10);
}

quizFrom.addEventListener("submit", handleSubmit);
