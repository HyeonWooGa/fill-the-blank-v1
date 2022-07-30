const quizFrom = document.getElementById("quiz-form");

const tree = quizFrom.querySelector("#tree");
const span = quizFrom.querySelector("#span");
const img = quizFrom.querySelector("#img");
const a = quizFrom.querySelector("#a");
const ul = quizFrom.querySelector("#ul");
const ol = quizFrom.querySelector("#ol");
const li = quizFrom.querySelector("#li");
const input = quizFrom.querySelector("#input");
const textarea = quizFrom.querySelector("#textarea");
const button = quizFrom.querySelector("#button");
const semantic = quizFrom.querySelector("#semantic");
const search = quizFrom.querySelector("#search");
const footer = quizFrom.querySelector("#footer");
const header = quizFrom.querySelector("#header");
const nav = quizFrom.querySelector("#nav");
const main = quizFrom.querySelector("#main");
const id = quizFrom.querySelector("#id");
const classs = quizFrom.querySelector("#classs");

const buttonn = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();
  if (tree.value !== "트리") tree.value = "";
  if (span.value !== "<span>") span.value = "";
  if (img.value !== "<img>") img.value = "";
  if (a.value !== "<a>") a.value = "";
  if (ul.value !== "<ul>") ul.value = "";
  if (ol.value !== "<ol>") ol.value = "";
  if (li.value !== "<li>") li.value = "";
  if (input.value !== "<input>") input.value = "";
  if (textarea.value !== "<textarea>") textarea.value = "";
  if (button.value !== "<button>") button.value = "";
  if (semantic.value !== "시맨틱") semantic.value = "";
  if (search.value !== "검색") search.value = "";
  if (footer.value !== "<footer>") footer.value = "";
  if (header.value !== "<header>") header.value = "";
  if (nav.value !== "<nav>") nav.value = "";
  if (main.value !== "<main>") main.value = "";
  if (id.value !== "id") id.value = "";
  if (classs.value !== "class") classs.value = "";
  buttonn.style.backgroundColor = "#E2DCC8";
  buttonn.style.color = "#5a8f7b";
  setTimeout(() => {
    buttonn.style.backgroundColor = "#5a8f7b";
    buttonn.style.color = "#E2DCC8";
  }, 10);
}

quizFrom.addEventListener("submit", handleSubmit);
