const quizFrom = document.getElementById("quiz-form");

const flex = quizFrom.querySelector("#flex");
const flexDirection = quizFrom.querySelector("#flex-direction");
const justifyContent = quizFrom.querySelector("#justify-content");
const alignItem = quizFrom.querySelector("#align-item");
const button = document.querySelector("button");

const inputData = [flex, flexDirection, justifyContent, alignItem, button]
const answer = ["flex", "flex-direction", "justify=content", "align-item", "button"]

function handleSubmit(event) {
  event.preventDefault();

  if (flex.value === "flex") flex.classList.add('success');
    else if (flex.value === "") {
      flex.classList.add('blank');
      flex.value= "빈칸입니다.";
    } else {
      flex.classList.add('Fail');
      flex.value = "오답입니다.";
    }

  if (flexDirection.value === "flex-direction")  flexDirection.classList.add('success');
    else if (flexDirection.value ==="") {
      flexDirection.classList.add('blank');
      flexDirection.value= "빈칸입니다.";
    } else {
    flexDirection.classList.add('Fail');
    flexDirection.value = "오답입니다.";
    }

  if (justifyContent.value === "justify-content") justifyContent.classList.add('success');
    else if(justifyContent.value ==="") {
      justifyContent.classList.add('blank');
      justifyContent.value= "빈칸입니다.";
  } else {
    justifyContent.classList.add('Fail');
    justifyContent.value = "오답입니다.";
  }

  if (alignItem.value === "align-item") alignItem.classList.add('success');
    else if (alignItem.value === "") {
      alignItem.classList.add('blank');
      alignItem.value="빈칸입니다.";
    } else {
    alignItem.classList.add('Fail');
    alignItem.value = "오답입니다.";
    }

  button.style.backgroundColor = "#E2DCC8";
  button.style.color = "#5a8f7b";
  setTimeout(() => {
    button.style.backgroundColor = "#5a8f7b";
    button.style.color = "#E2DCC8";
  }, 10);
}

quizFrom.addEventListener("submit", handleSubmit);