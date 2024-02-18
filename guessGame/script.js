// guess number logic code

let num = prompt("Enter max number: ");
let guess = prompt("Enter Guessed number: ");

let ran = Math.floor(Math.random() * num) + 1;

while (true) {
  if (guess == "quit" || guess == "exit") {
    console.log("Quit game");
    break;
  } else if (guess == ran) {
    alert("Correct answer !!");
    break;
  } else if (guess < ran) {
    guess = prompt("Hint: Number is too small, try again");
  } else {
    guess = prompt("Hint: Number is too large, try again");
  }
}

console.log("The Random number is", ran);
