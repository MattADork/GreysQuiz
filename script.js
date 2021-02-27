function questionOne() {
let yang1 = 0;
let mer1 = 0;
let alex1 = 0;
let izzie1 = 0;
let george1 = 0;
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
q1Values = [yang1, mer1, alex1, george1, izzie1];
console.log(`You chose: ${choiceOne}`)
return q1Values
}