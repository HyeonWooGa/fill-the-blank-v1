const quizFrom = document.getElementById("quiz-form");

const hello = quizFrom.querySelector("#hello");

const button = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();
  if (hello.value === "안녕하세요") {
    hello.classList.add("success");
    hello.classList.remove("blank");
    hello.classList.remove("Fail");
  } else if (hello.value === "") {
    hello.classList.add("blank");
    hello.classList.remove("Fail");
    hello.classList.remove("success");
    hello.value = "빈칸입니다."
  } else {
    hello.classList.add("Fail");
    hello.classList.remove("success");
    hello.classList.remove("blank");
    hello.value = "오답입니다."
  }

  button.style.backgroundColor = "#E2DCC8";
  button.style.color = "#5a8f7b";
  setTimeout(() => {
    button.style.backgroundColor = "#5a8f7b";
    button.style.color = "#E2DCC8";
  }, 10);
}

function inputWipe(event) {
  event.target.value = "";
  event.target.classList.remove("success")
  event.target.classList.remove("blank")
  event.target.classList.remove("Fail")
}

hello.addEventListener("click", inputWipe);
quizFrom.addEventListener("submit", handleSubmit);
