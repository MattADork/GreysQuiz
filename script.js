const answerA = document.querySelector("#answer-a");
const answerB = document.querySelector("#answer-b");
const answerC = document.querySelector("#answer-c");
const answerD = document.querySelector("#answer-d");
const question = document.querySelector(".question");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) =>
  button.addEventListener("click", () => evaluate(button.textContent))
);

function evaluate(key) {
  console.log(key);
  if (question.textContent === "How far are you willing to go to get into the operating room?" && key.includes("a)")) {
    evaluateQ1A();
  }
  if (question.textContent === "How far are you willing to go to get into the operating room?" && key.includes("b)")) {
    evaluateQ1B();
  }
  if (question.textContent === "How far are you willing to go to get into the operating room?" && key.includes("c)")) {
    evaluateQ1C();
  }
  if (question.textContent === "How far are you willing to go to get into the operating room?" && key.includes("d)")) {
    evaluateQ1D();
  }

  if (question.textContent === "How do you feel about kids?" && key.includes("a)")) {
    evaluateQ1A();
  }
  if (question.textContent === "How do you feel about kids?" && key.includes("b)")) {
    evaluateQ1B();
  }
  if (question.textContent === "How do you feel about kids?" && key.includes("c)")) {
    evaluateQ1C();
  }
  if (question.textContent === "How do you feel about kids?" && key.includes("d)")) {
    evaluateQ1D();
  }
}

function evaluateQ1A() {
  printQuestion2();
}
function evaluateQ1B() {
  printQuestion2();
}
function evaluateQ1C() {
  printQuestion2();
}
function evaluateQ1D() {
  printQuestion2();
}

function printQuestion2() {
  answerA.textContent = "a) Love them, might even have one of my own one day!";
  answerB.textContent = "b) I like kids for the most part.";
  answerC.textContent = "c) They annoy me a bit.";
  answerD.textContent = "d) LOL fuck no!";
  question.textContent = "How do you feel about kids?";
}