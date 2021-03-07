const answerA = document.querySelector("#answer-a");
const answerB = document.querySelector("#answer-b");
const answerC = document.querySelector("#answer-c");
const answerD = document.querySelector("#answer-d");
const question = document.querySelector(".question");
const buttons = document.querySelectorAll(".button");
const image = document.querySelector("#character-photo")
let alex = 0;
let george = 0;
let izzie = 0;
let meredith = 0;
let yang = 0;

buttons.forEach((button) =>
  button.addEventListener("click", () => evaluate(button.textContent))
);

function evaluate(key) {
  if (question.textContent.includes("moms") && key.includes("a)")) {
    evaluateQ7A();
    chooseWinner();
  }
  if (question.textContent.includes("moms") && key.includes("b)")) {
    evaluateQ7B();
    chooseWinner();
  }
  if (question.textContent.includes("moms") && key.includes("c)")) {
    evaluateQ7C();
    chooseWinner();
  }
  if (question.textContent.includes("moms") && key.includes("d)")) {
    evaluateQ7D();
    chooseWinner();
  }


  if (question.textContent.includes("you in bed") && key.includes("a)")) {
    evaluateQ6A();
  }
  if (question.textContent.includes("you in bed") && key.includes("b)")) {
    evaluateQ6B();
  }
  if (question.textContent.includes("you in bed") && key.includes("c)")) {
    evaluateQ6C();
  }
  if (question.textContent.includes("you in bed") && key.includes("d)")) {
    evaluateQ6D();
  }

  if (question.textContent.includes("party guests") && key.includes("a)")) {
    evaluateQ5A();
  }
  if (question.textContent.includes("party guests") && key.includes("b)")) {
    evaluateQ5B();
  }
  if (question.textContent.includes("party guests") && key.includes("c)")) {
    evaluateQ5C();
  }
  if (question.textContent.includes("party guests") && key.includes("d)")) {
    evaluateQ5D();
  }

  if (question.textContent.includes("de-stress") && key.includes("a)")) {
    evaluateQ4A();
  }
  if (question.textContent.includes("de-stress") && key.includes("b)")) {
    evaluateQ4B();
  }
  if (question.textContent.includes("de-stress") && key.includes("c)")) {
    evaluateQ4C();
  }
  if (question.textContent.includes("de-stress") && key.includes("d)")) {
    evaluateQ4D();
  }

  if (question.textContent.includes("about anniversaries") && key.includes("a)")) {
    evaluateQ3A();
  }
  if (question.textContent.includes("about anniversaries") && key.includes("b)")) {
    evaluateQ3B();
  }
  if (question.textContent.includes("about anniversaries") && key.includes("c)")) {
    evaluateQ3C();
  }
  if (question.textContent.includes("about anniversaries") && key.includes("d)")) {
    evaluateQ3D();
  }
  
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

function evaluateQ7A() {
  alex -= 2;
  george += 2;
  izzie += 2;
  meredith -= 2;
  yang -= 2;
  //printQuestion_();
}
function evaluateQ7B() {
  alex += 1;
  george += 2;
  izzie += 1;
  meredith += 1;
  yang += 0;
  //printQuestion_();
}
function evaluateQ7C() {
  alex += 0;
  george -= 1;
  izzie -= 2;
  meredith += 1;
  yang += 2;
  //printQuestion_();
}
function evaluateQ7D() {
  alex += 1;
  george -= 2;
  izzie -= 2;
  meredith += 1;
  yang += 2;
  //printQuestion_();
}

function evaluateQ6A() {
  alex += 1;
  george -= 2;
  izzie += 0;
  meredith += 1;
  yang += 2;
  printQuestion7();
}
function evaluateQ6B() {
  alex += 2;
  george -= 2;
  izzie -= 1;
  meredith += 2;
  yang += 2;
  printQuestion7();
}
function evaluateQ6C() {
  alex -= 2;
  george += 2;
  izzie += 1;
  meredith += 1;
  yang -= 2;
  printQuestion7();
}
function evaluateQ6D() {
  alex -= 2;
  george -= 2;
  izzie += 2;
  meredith += 0;
  yang += 0;
  printQuestion7();
}

function evaluateQ5A() {
  alex += 1;
  george -= 1;
  izzie += 2;
  meredith += 1;
  yang -= 1;
  printQuestion6();
}
function evaluateQ5B() {
  alex += 1;
  george += 0;
  izzie += 0;
  meredith += 2;
  yang += 1;
  printQuestion6();
}
function evaluateQ5C() {
  alex += 0;
  george += 1;
  izzie += 0;
  meredith += 1;
  yang += 2;
  printQuestion6();
}
function evaluateQ5D() {
  alex -= 1;
  george += 2;
  izzie -= 1;
  meredith -= 1;
  yang += 0;
  printQuestion6();
}

function evaluateQ4A() {
  alex -= 2;
  george -= 2;
  izzie += 0;
  meredith += 1 ;
  yang += 2;
  printQuestion5();
}
function evaluateQ4B() {
  alex += 2;
  george -= 2;
  izzie -= 1;
  meredith += 0;
  yang += 1;
  printQuestion5();
}
function evaluateQ4C() {
  alex += 0;
  george += 1;
  izzie += 2;
  meredith -= 2;
  yang -= 1;
  printQuestion5();
}
function evaluateQ4D() {
  alex += 1;
  george += 2;
  izzie += 0;
  meredith += 2;
  yang += 1;
  printQuestion5();
}

function evaluateQ3A() {
  alex += -2;
  george += 2;
  izzie += 2;
  meredith -= 2;
  yang -= 2;
  printQuestion4();
}
function evaluateQ3B() {
  alex += 0;
  george += 2;
  izzie += 0;
  meredith += 0;
  yang -= 1;
  printQuestion4();
}
function evaluateQ3C() {
  alex += 2;
  george -= 0;
  izzie -= 2;
  meredith += 1;
  yang += 2;
  printQuestion4();
}
function evaluateQ3D() {
  alex += 1;
  george -= 2;
  izzie -= 2;
  meredith += 1;
  yang += 2;
  printQuestion4();
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

function printQuestion4() {
  answerA.textContent = "a) Dancing";
  answerB.textContent = "b) Fucking";
  answerC.textContent = "c) Eating";
  answerD.textContent = "d) Drinking";
  question.textContent = "How do you de-stress?";
}

function printQuestion5() {
  answerA.textContent = "a) I love huge parties, the more the merrier!";
  answerB.textContent = "b) I don't mind a big party, but I prefer to know most of the people in attendance.";
  answerC.textContent = "c) Smaller is better, I like a more intimate setting.";
  answerD.textContent = "d) At no point do I ever want to be at a party.";
  question.textContent = "What's the ideal number of party guests?";
}

function printQuestion6() {
  answerA.textContent = "a) Amazing if I think you're worth it.";
  answerB.textContent = "b) Let's just say I am a very sexually active person.";
  answerC.textContent = "c) I try.";
  answerD.textContent = "d) I'm theatrical.";
  question.textContent = "How good are you in bed?";
}

function printQuestion7() {
  answerA.textContent = "a) Always.";
  answerB.textContent = "b) I can put on a good song and dance.";
  answerC.textContent = "c) I try to avoid parents.";
  answerD.textContent = "d) Parents tend to dislike me on first impression.";
  question.textContent = "Do moms like you?";
}






function chooseWinner() {
  if (alex > george && alex > izzie && alex > meredith && alex > yang) {
    answerA.textContent = "";
    answerB.textContent = "";
    answerC.textContent = "";
    answerD.textContent = "";
    question.textContent = "Congratulations! You're Alex Karev!";
    image.src="https://upload.wikimedia.org/wikipedia/en/f/f3/Dr._Alex_Karev.jpg";
  } else if (george > alex && george > izzie && george > meredith && george > yang) {
    answerA.textContent = "";
    answerB.textContent = "";
    answerC.textContent = "";
    answerD.textContent = "";
    question.textContent = "Congratulations! You're George O'Malley!";
    image.src="https://s.yimg.com/ny/api/res/1.2/W1BLOtE.o55C9hoOJxePCQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTg1My4zMzMzMzMzMzMzMzM0/https://s.yimg.com/uu/api/res/1.2/VrA5XJnvwnJIZn9iXFeeFw--~B/aD01ODA7dz00MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/people_218/bec904a12237eb612cc13374db6d6774";
  } else if (izzie > george && izzie > alex && izzie > meredith && izzie > yang) {
    answerA.textContent = "";
    answerB.textContent = "";
    answerC.textContent = "";
    answerD.textContent = "";
    question.textContent = "Congratulations! You're Izzie Stevens!";
    image.src="https://upload.wikimedia.org/wikipedia/en/9/94/Dr._Isobel_Stevens.jpg";
  } else if (meredith > george && meredith > izzie && meredith > alex && meredith > yang) {
    answerA.textContent = "";
    answerB.textContent = "";
    answerC.textContent = "";
    answerD.textContent = "";
    question.textContent = "Congratulations! You're Meredith Grey!";
    image.src="https://i.pinimg.com/474x/92/a9/94/92a994c4f58ce56a87ab94635940bf96.jpg";
  } else if (yang > george && yang > izzie && yang > meredith && yang > alex) {
    answerA.textContent = "";
    answerB.textContent = "";
    answerC.textContent = "";
    answerD.textContent = "";
    question.textContent = "Congratulations! You're Cristina Yang!";
    image.src="https://pyxis.nymag.com/v1/imgs/5c5/681/bab25750a3a1c8afe39be7ce6e51f22ea8-23-greys1.jpg";
  } else {
    answerA.textContent = "";
    answerB.textContent = "";
    answerC.textContent = "";
    answerD.textContent = "";
    question.textContent = "Sorry, you're too similar to more than one character!";
    image.src="";
  }
}