const answerA = document.querySelector("#answer-a");
const answerB = document.querySelector("#answer-b");
const answerC = document.querySelector("#answer-c");
const answerD = document.querySelector("#answer-d");
const question = document.querySelector(".question");
const buttons = document.querySelectorAll(".button");
let alex = 0;
let george = 0;
let izzie = 0;
let meredith = 0;
let yang = 0;

buttons.forEach((button) =>
  button.addEventListener("click", () => evaluate(button.textContent))
);

function evaluate(key) {
  if (question.textContent.includes("feel about kids") && key.includes("a)")) {
    evaluateQ2A();
  }
  if (question.textContent.includes("feel about kids") && key.includes("b)")) {
    evaluateQ2B();
  }
  if (question.textContent.includes("feel about kids") && key.includes("c)")) {
    evaluateQ2C();
  }
  if (question.textContent.includes("feel about kids") && key.includes("d)")) {
    evaluateQ2D();
  }

  if (question.textContent.includes("willing to go") && key.includes("a)")) {
    evaluateQ1A();
  }
  if (question.textContent.includes("willing to go") && key.includes("b)")) {
    evaluateQ1B();
  }
  if (question.textContent.includes("willing to go") && key.includes("c)")) {
    evaluateQ1C();
  }
  if (question.textContent.includes("willing to go") && key.includes("d)")) {
    evaluateQ1D();
  }

}


function evaluateQ2A() {
  alex += 0;
  george += 1;
  izzie += 2;
  meredith += 1;
  yang -= 2;
  printQuestion3();
}
function evaluateQ2B() {
  alex += 2;
  george += 1;
  izzie += 0;
  meredith -= 1;
  yang -= 1;
  printQuestion3();
}
function evaluateQ2C() {
  alex += 0;
  george -= 2;
  izzie -= 2;
  meredith -= 1;
  yang += 1;
  printQuestion3();
}
function evaluateQ2D() {
  alex -= 1;
  george -= 2;
  izzie -= 2;
  meredith -= 2;
  yang += 2;
  printQuestion3();
}

function evaluateQ1A() {
  alex += 0;
  george -= 1;
  izzie -= 1;
  meredith += 1;
  yang += 2;
  printQuestion2();
}
function evaluateQ1B() {
  alex += 1;
  george -= 1;
  izzie -= 1;
  meredith += 1;
  yang += 0;
  printQuestion2();
}
function evaluateQ1C() {
  alex += 0;
  george += 1;
  izzie += 1;
  meredith += 1;
  yang -= 1;
  printQuestion2();
}
function evaluateQ1D() {
  alex -= 2;
  george += 2;
  izzie += 2;
  meredith -= 2;
  yang -= 2;
  printQuestion2();
}

function printQuestion2() {
  answerA.textContent = "a) Love them, might even have one of my own one day!";
  answerB.textContent = "b) I like kids for the most part.";
  answerC.textContent = "c) They annoy me a bit.";
  answerD.textContent = "d) LOL fuck no!";
  question.textContent = "How do you feel about kids?";
}

function printQuestion3() {
  answerA.textContent = "a) They're important! Obviously!";
  answerB.textContent = "b) Sometimes they're nice, but family holidays are rough.";
  answerC.textContent = "c) I don't really care about them.";
  answerD.textContent = "d) I'd rather be in surgery!";
  question.textContent = "How much do you are about anniversaries, birthdays, and holidays?";
}

