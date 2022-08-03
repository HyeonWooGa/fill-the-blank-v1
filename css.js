const quizFrom = document.getElementById("quiz-form");
const answerInput = quizFrom.querySelectorAll("input");

const textEle = [];
const inputData = [];

for (let i = 0; i < answerInput.length; i++) {
  textEle.push(answerInput[i].id);
  let ele = textEle[i];
  ele = quizFrom.querySelector(`#${ele}`);
  inputData.push(ele);
}
const answer = ["flex", "flex-direction", "justify-content", "align-item", "button"]

const button = document.querySelector("button");

function grading(input, answer) {
  for(let i = 0; i < input.length; i++) {
    if(input[i].value === answer[i]) {
      inputData[i].classList.remove("blank");
      inputData[i].classList.remove("Fail");
      inputData[i].classList.add("success");
    } else if (input[i].value === "" || input[i].value ==="빈칸입니다.") {
      inputData[i].classList.remove("success")
      inputData[i].classList.remove("Fail")
      inputData[i].classList.add("blank")
      inputData[i].value = "빈칸입니다.";
    } else {
      inputData[i].classList.remove("success");
      inputData[i].classList.remove("blank");
      inputData[i].classList.add("Fail");
      inputData[i].value = "오답입니다.";
    }
  }
}
function inputWipe(event) {
  event.target.value = "";
  event.target.classList.remove("success")
  event.target.classList.remove("blank")
  event.target.classList.remove("Fail")
}

function handleSubmit(event) {
  event.preventDefault();

  grading(inputData, answer);

  button.style.backgroundColor = "#E2DCC8";
  button.style.color = "#5a8f7b";
  setTimeout(() => {
    button.style.backgroundColor = "#5a8f7b";
    button.style.color = "#E2DCC8";
  }, 10);
}

for (let i = 0; i < answerInput.length; i++) {
  let ele = answerInput[i];
  ele.addEventListener("click", inputWipe);
}

quizFrom.addEventListener("submit", handleSubmit);