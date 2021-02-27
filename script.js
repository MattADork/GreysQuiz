function finalAnswer() {
  let finalValues = questionTwo();
  if (finalValues[0] > finalValues[1] && finalValues[0] > finalValues[2] && finalValues[0] > finalValues[3] && finalValues[0] > finalValues[4]) {
    alert("You are Alex Karev! Congratulations!");
  } else if (finalValues[1] > finalValues[0] && finalValues[1] > finalValues[2] && finalValues[1] > finalValues[3] && finalValues[1] > finalValues[4]) {
    alert ("You are George O'Malley! Congratulations!");
  } else if (finalValues[2] > finalValues[1] && finalValues[2] > finalValues[0] && finalValues[2] > finalValues[3] && finalValues[2] > finalValues[4]) {
    alert ("You are Izzie Stevens! Congratulations!");
  } else if (finalValues[3] > finalValues[1] && finalValues[3] > finalValues[2] && finalValues[3] > finalValues[0] && finalValues[3] > finalValues[4]) {
    alert ("You are Meredith Grey! Congratulations!");
  } else if (finalValues[4] > finalValues[1] && finalValues[4] > finalValues[2] && finalValues[4] > finalValues[3] && finalValues[4] > finalValues[0]) {
    alert ("You are Cristina Yang! Congratulations!");
  }
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
    q2values[0] += 1;
    q2Values[1] += 2;
    q2Values[2] += 2;
    q2Values[3] -= 2;
    q2Values[4] -= 2;
  } else if (choiceThree === "b") {
    q2Values[0] += 1;
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
  console.log("a) Love them, might even have one of my own one day");
  console.log("b) I like kids for the most part");
  console.log("c) They annoy me a bit");
  console.log("d) LOL fuck no");
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
    yang1 += 2; 
    mer1 += 1;
    alex1 += 0;
    george1 -= 2;
    izzie1 -= -1;
  } else if (choiceOne === "b") {
    yang1 += 1;
    mer1 += 2;
    alex1 += 1;
    george1 -= 1;
    izzie1 -=1;
  } else if (choiceOne === "c") {
    yang1 -= 1;
    mer1 = mer1;
    alex1 -= 1;
    george1 += 1;
    izzie1 += 1;
  } else if (choiceOne === "d") {
    yang1 -= 2;
    mer1 -= 2;
    alex1 -= 2;
    george1 += 2;
    izzie1 += 1;
  }
  q1Values = [alex1, george1, izzie1, mer1, yang1];
  console.log(`You chose: ${choiceOne}`)
  return q1Values
}