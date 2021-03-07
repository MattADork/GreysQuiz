function finalAnswer() {
  let finalValues = questionSeven();
  if (finalValues[0] > finalValues[1] && finalValues[0] > finalValues[2] && finalValues[0] > finalValues[3] && finalValues[0] > finalValues[4]) {
    console.log("You are Alex Karev! Congratulations!");
    alert ("You are Alex Karev! Congratulations!");
  } else if (finalValues[1] > finalValues[0] && finalValues[1] > finalValues[2] && finalValues[1] > finalValues[3] && finalValues[1] > finalValues[4]) {
    console.log("You are George O'Malley! Congratulations!");
    alert ("You are George O'Malley! Congratulations!");
  } else if (finalValues[2] > finalValues[1] && finalValues[2] > finalValues[0] && finalValues[2] > finalValues[3] && finalValues[2] > finalValues[4]) {
    console.log("You are Izzie Stevens! Congratulations!");
    alert ("You are Izzie Stevens! Congratulations!");
  } else if (finalValues[3] > finalValues[1] && finalValues[3] > finalValues[2] && finalValues[3] > finalValues[0] && finalValues[3] > finalValues[4]) {
    console.log("You are Meredith Grey! Congratulations!");
    alert ("You are Meredith Grey! Congratulations!");
  } else if (finalValues[4] > finalValues[1] && finalValues[4] > finalValues[2] && finalValues[4] > finalValues[3] && finalValues[4] > finalValues[0]) {
    console.log("You are Cristina Yang! Congratulations!");
    alert ("You are Cristina Yang! Congratulations!");
  } else {
    console.log("We couldn't decide... You share traits with all of them! Try again!");
    alert ("We couldn't decide... You share traits with all of them! Try again!");
  }
}

function questionSeven() {
  let q6Values = questionSix();
  console.log("Do moms like you?");
  console.log("a) Always.");
  console.log("b) I can put on a good song and dance.");
  console.log("c) I try to avoid parents.");
  console.log("d) Parents tend to dislike me on first impression");
  choiceSeven = prompt("a/b/c/d: ?").toLowerCase();
  if (choiceSeven === "a") {
    q6Values[0] -= 2;
    q6Values[1] += 2;
    q6Values[2] += 2;
    q6Values[3] -= 2;
    q6Values[4] -= 2;
  } else if (choiceSeven === "b") {
    q6Values[0] += 1;
    q6Values[1] += 2;
    q6Values[2] += 1;
    q6Values[3] += 1;
    q6Values[4] += 0;
  } else if (choiceSeven === "c") {
    q6Values[0] += 0;
    q6Values[1] -= 1;
    q6Values[2] -= 2;
    q6Values[3] += 1;
    q6Values[4] += 2;
  } else if (choiceSeven === "d") {
    q6Values[0] += 1;
    q6Values[1] -= 2;
    q6Values[2] -= 2;
    q6Values[3] += 1;
    q6Values[4] += 2;
  }
  q7Values = [q6Values[0], q6Values[1], q6Values[2], q6Values[3], q6Values[4]];
  console.log(`You chose ${choiceSeven}`);
  return q7Values;
}

function questionSix() {
  let q5Values = questionFive();
  console.log("How good are you in bed?");
  console.log("a) Amazing if I think you're worth it.");
  console.log("b) Let's just say I am a very sexually active person.");
  console.log("c) I try.");
  console.log("d) I'm theatrical.");
  choiceSix = prompt("a/b/c/d: ?").toLowerCase();
  if (choiceSix === "a") {
    q5Values[0] += 1;
    q5Values[1] -= 2;
    q5Values[2] += 0;
    q5Values[3] += 1;
    q5Values[4] += 2;
  } else if (choiceSix === "b") {
    q5Values[0] += 2;
    q5Values[1] -= 2;
    q5Values[2] -= 1;
    q5Values[3] += 2;
    q5Values[4] += 2;
  } else if (choiceSix === "c") {
    q5Values[0] -= 2;
    q5Values[1] += 2;
    q5Values[2] += 1;
    q5Values[3] += 1;
    q5Values[4] -= 2;
  } else if (choiceSix === "d") {
    q5Values[0] -= 2;
    q5Values[1] -= 2;
    q5Values[2] += 2;
    q5Values[3] += 0;
    q5Values[4] += 0;
  }
  q6Values = [q5Values[0], q5Values[1], q5Values[2], q5Values[3], q5Values[4]];
  console.log(`You chose ${choiceSix}`);
  return q6Values;
}

function questionFive() {
  let q4Values = questionFour();
  console.log("What's the ideal number of party guests?");
  console.log("a) I love huge parties, the more the merrier!");
  console.log("b) I don't mind a big party, but I prefer to know most of the people in attendance.");
  console.log("c) Smaller is better, I like a more intimate setting.");
  console.log("d) At no point do I ever want to be at a party.");
  choiceFive = prompt("a/b/c/d: ?").toLowerCase();
  if (choiceFive === "a") {
    q4Values[0] += 1;
    q4Values[1] -= 1;
    q4Values[2] += 2;
    q4Values[3] += 1;
    q4Values[4] -= 1;
  } else if (choiceFive === "b") {
    q4Values[0] += 1;
    q4Values[1] += 0;
    q4Values[2] += 0;
    q4Values[3] += 2;
    q4Values[4] += 1;
  } else if (choiceFive === "c") {
    q4Values[0] += 0;
    q4Values[1] += 1;
    q4Values[2] += 0;
    q4Values[3] += 1;
    q4Values[4] += 2;
  } else if (choiceFive === "d") {
    q4Values[0] -= 1;
    q4Values[1] += 2;
    q4Values[2] -= 1;
    q4Values[3] -= 1;
    q4Values[4] += 0;
  }
  q5Values = [q4Values[0], q4Values[1], q4Values[2], q4Values[3], q4Values[4]];
  console.log(`You chose ${choiceFive}`);
  return q5Values;
}

function questionFour() {
  let q3Values = questionThree();
  console.log("How do you de-stress?");
  console.log("a) Dancing");
  console.log("b) Fucking");
  console.log("c) Eating");
  console.log("d) Drinking");
  choiceFour = prompt("a/b/c/d: ?").toLowerCase();
  if (choiceFour === "a") {
    q3Values[0] -= 2;
    q3Values[1] -= 2;
    q3Values[2] += 0;
    q3Values[3] += 1;
    q3Values[4] += 2;
  } else if (choiceFour === "b") {
    q3Values[0] += 2;
    q3Values[1] += 0;
    q3Values[2] -= 1;
    q3Values[3] += 2;
    q3Values[4] += 2;
  } else if (choiceFour === "c") {
    q3Values[0] += 0;
    q3Values[1] += 1;
    q3Values[2] += 2;
    q3Values[3] -= 2;
    q3Values[4] -= 2;
  } else if (choiceFour === "d") {
    q3Values[0] += 1;
    q3Values[1] += 2;
    q3Values[2] += 0;
    q3Values[3] += 2;
    q3Values[4] += 1;
  }
  q4Values = [q3Values[0], q3Values[1], q3Values[2], q3Values[3], q3Values[4]];
  console.log(`You chose ${choiceFour}`);
  return q4Values;
}

function questionThree() {
  let q2Values = questionTwo();
  console.log("How much do you are about anniversaries, birthdays, and holidays?");
  console.log("a) They're important! Obviously!");
  console.log("b) Sometimes they're nice, but family holidays are rough.");
  console.log("c) I don't really care about them.");
  console.log("d) I\'d rather be in surgery!");
  choiceThree = prompt("a/b/c/d: ?").toLowerCase();
  if (choiceThree === "a") {
    q2Values[0] -= 2;
    q2Values[1] += 2;
    q2Values[2] += 2;
    q2Values[3] -= 2;
    q2Values[4] -= 2;
  } else if (choiceThree === "b") {
    q2Values[0] += 0;
    q2Values[1] += 2;
    q2Values[2] += 0;
    q2Values[3] += 1;
    q2Values[4] += 0;
  } else if (choiceThree === "c") {
    q2Values[0] += 2;
    q2Values[1] += 0;
    q2Values[2] -= 2;
    q2Values[3] += 2;
    q2Values[4] += 2;
  } else if (choiceThree === "d") {
    q2Values[0] += 1;
    q2Values[1] -= 2;
    q2Values[2] -= 2;
    q2Values[3] += 1;
    q2Values[4] += 2;
  }
  q3Values = [q2Values[0], q2Values[1], q2Values[2], q2Values[3], q2Values[4]];
  console.log(`You chose ${choiceThree}`);
  return q3Values;
}

function questionTwo() {
  let q1Values = questionOne();
  console.log("How do you feel about kids?");
  console.log("a) Love them, might even have one of my own one day!");
  console.log("b) I like kids for the most part.");
  console.log("c) They annoy me a bit.");
  console.log("d) LOL fuck no!");
  choiceTwo = prompt("a/b/c/d?: ").toLowerCase();
  if (choiceTwo === "a") {
    q1Values[0] += 1;
    q1Values[1] += 2;
    q1Values[2] += 2;
    q1Values[3] += 1;
    q1Values[4] -= 2;
  } else if (choiceTwo === "b") {
    q1Values[0] += 2;
    q1Values[1] += 1;
    q1Values[2] += 0;
    q1Values[3] += 2;
    q1Values[4] -= 2;
  } else if (choiceTwo === "c") {
    q1Values[0] += 0;
    q1Values[1] -= 2;
    q1Values[2] -= 2;
    q1Values[3] += 0;
    q1Values[4] += 1;
  } else if (choiceTwo === "d") {
    q1Values[0] -= 1;
    q1Values[1] -= 2;
    q1Values[2] -= 2;
    q1Values[3] -= 1;
    q1Values[4] += 2;
  }
  q2Values = [q1Values[0], q1Values[1], q1Values[2], q1Values[3], q1Values[4]];
  console.log(`You chose ${choiceTwo}`);
  return q2Values;
}


function questionOne() {
  let alex1 = 0;
  let george1 = 0;
  let izzie1 = 0;
  let mer1 = 0;
  let yang1 = 0;
  console.log("How far are you willing to go to get into the operating room?");
  console.log("a) I would lie, cheat, or steal to get a good surgery.");
  console.log("b) I would plead with these attendings to let me in.");
  console.log("c) I would hope for the best, whatever happens happens.");
  console.log("d) I would prefer not to be in the operating room.");
  choiceOne = prompt("a/b/c/d?: ").toLowerCase();
  if (choiceOne === "a") {
    alex1 += 0;
    george1 -= 2;
    izzie1 -= -1;
    mer1 += 1;
    yang1 += 2; 
  } else if (choiceOne === "b") {
    alex1 += 1;
    george1 -= 1;
    izzie1 -=1;
    mer1 += 2;
    yang1 += 1;
  } else if (choiceOne === "c") {
    alex1 -= 1;
    george1 += 1;
    izzie1 += 1;
    mer1 += 1;
    yang1 -= 1;
  } else if (choiceOne === "d") {
    alex1 -= 2;
    george1 += 2;
    izzie1 += 1;
    mer1 -= 2;
    yang1 -= 2;
  }
  q1Values = [alex1, george1, izzie1, mer1, yang1];
  console.log(`You chose: ${choiceOne}`)
  return q1Values
}