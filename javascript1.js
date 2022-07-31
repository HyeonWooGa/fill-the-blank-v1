const quizFrom = document.getElementById("quiz-form");

const declaration = quizFrom.querySelector("#declaration");
const assignment = quizFrom.querySelector("#assignment");
const declaration1 = quizFrom.querySelector("#declaration1");
const assignment1 = quizFrom.querySelector("#assignment1");
const typeof1 = quizFrom.querySelector("#typeof1");
const string = quizFrom.querySelector("#string");
const number = quizFrom.querySelector("#number");
const boolean = quizFrom.querySelector("#boolean");
const undefined1 = quizFrom.querySelector("#undefined1");
const function1 = quizFrom.querySelector("#function1");
const object = quizFrom.querySelector("#object");
const object1 = quizFrom.querySelector("#object1");
const function2 = quizFrom.querySelector("#function2");
const functionDeclaration = quizFrom.querySelector("#function-declaration");
const functionExpression = quizFrom.querySelector("#function-expression");
const arrowFunctionExpression = quizFrom.querySelector(
  "#arrow-function-expression"
);
const not = quizFrom.querySelector("#not");
const and = quizFrom.querySelector("#and");
const or = quizFrom.querySelector("#or");
const toUpperCase = quizFrom.querySelector("#to-upper-case");
const trim = quizFrom.querySelector("#trim");
const split = quizFrom.querySelector("#split");
const initialization = quizFrom.querySelector("#initialization");

const button = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();
  if (declaration.value !== "선언") declaration.value = "";
  if (assignment.value !== "할당") assignment.value = "";
  if (declaration1.value !== "선언") declaration1.value = "";
  if (assignment1.value !== "할당") assignment1.value = "";
  if (typeof1.value !== "typeof") typeof1.value = "";
  if (string.value !== "'string'") string.value = "";
  if (number.value !== "'number'") number.value = "";
  if (boolean.value !== "'boolean'") boolean.value = "";
  if (undefined1.value !== "'undefined'") undefined1.value = "";
  if (function1.value !== "'function'") function1.value = "";
  if (object.value !== "'object'") object.value = "";
  if (object1.value !== "'object'") object1.value = "";
  if (function2.value !== "함수") function2.value = "";
  if (functionDeclaration.value !== "선언식") functionDeclaration.value = "";
  if (functionExpression.value !== "표현식") functionExpression.value = "";
  if (arrowFunctionExpression.value !== "화살표")
    arrowFunctionExpression.value = "";
  if (not.value !== "!") not.value = "";
  if (and.value !== "&&") and.value = "";
  if (or.value !== "||") or.value = "";
  if (toUpperCase.value !== "toUppercase()") toUpperCase.value = "";
  if (trim.value !== "trim()") trim.value = "";
  if (split.value !== "split()") split.value = "";
  if (initialization.value !== "초기화") initialization.value = "";
  button.style.backgroundColor = "#E2DCC8";
  button.style.color = "#5a8f7b";
  setTimeout(() => {
    button.style.backgroundColor = "#5a8f7b";
    button.style.color = "#E2DCC8";
  }, 10);
}

quizFrom.addEventListener("submit", handleSubmit);
