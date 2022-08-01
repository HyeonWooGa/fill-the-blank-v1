const quizFrom = document.getElementById("quiz-form");

const flex = quizFrom.querySelector("#flex");
const flexDirection = quizFrom.querySelector("#flex-direction");
const justifyContent = quizFrom.querySelector("#justify-content");
const alignItem = quizFrom.querySelector("#align-item");
const button = document.querySelector("button");

// const inputData = [flex, flexDirection, justifyContent, alignItem, button]
// const answer = ["flex", "flex-direction", "justify=content", "align-item", "button"]


// 정답 채점 함수 만들기.
// 아래 함수에서 this를 어떻게 사용하면 해결이 될 듯 한데.. 고민중입니다 ㅠ

// function grading(input, answer) {
//   if (input.value === answer) input.classList.add('success');
//   else {
//     input.classList.add('Fail');
//     input.value = "오답입니다.";
//   }
// }

function handleSubmit(event) {
  event.preventDefault();

  // grading(inputData, answer)
  if (flex.value === "flex") flex.classList.add('success');
    else if (flex.value === "") {
      flex.classList.add('blank');
      flex.value= "빈칸입니다.";
    }
    else {
      flex.classList.add('Fail');
      flex.value = "오답입니다.";
    }

  if (flexDirection.value !== "flex-direction") {
    flexDirection.classList.add('Fail');
    flexDirection.value = "오답입니다.";
  } else flexDirection.classList.add('success');

  if (justifyContent.value !== "justify-content") {
    justifyContent.classList.add('Fail');
    justifyContent.value = "오답입니다.";
  } else justifyContent.classList.add('success');

  if (alignItem.value !== "align-item") {
    alignItem.classList.add('Fail');
    alignItem.value = "오답입니다.";
  } else alignItem.classList.add('success');

  button.style.backgroundColor = "#E2DCC8";
  button.style.color = "#5a8f7b";
  setTimeout(() => {
    button.style.backgroundColor = "#5a8f7b";
    button.style.color = "#E2DCC8";
  }, 10);
}

quizFrom.addEventListener("submit", handleSubmit);