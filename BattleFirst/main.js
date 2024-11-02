#!/usr/bin/node
/* ******************************************************** *
 * Simple clone of Paper Scissors Rock by Robin Goerlach    *
 * ******************************************************** */

const validChoices = ["rock", "paper", "scissors"];
const path = require("path");
const appPath = process.argv[1]; // Assuming argv[1] contains the full path
const appName = path.basename(appPath);
const argNo = process.argv.length;

/* Computer move decision */
function getComputerChoice() {
  const index = Math.floor(Math.random() * validChoices.length);
  //console.log("Computer chose:", validChoises[index]);
  return validChoices[index];
}

/* Who wins? */
function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "Player wins!";
  }

  return "Computer wins!";
}

/* Main programm */
const computer = getComputerChoice();

/* Do we have enough aruments to start? */
/* TODO: remove magic no */
if (argNo != 3) {
  console.error(
    "\nYou need to run ",
    appName,
    " with an arguments \nPaper, Scissors or Rock would be good!\n"
  );
  return 1;
}

/* Check is users move valid? */
const playerChoice = process.argv[2].toLowerCase();
if (!validChoices.includes(playerChoice)) {
  console.error("Your choice is not understood, \ntry Paper, Scissors or Rock");
  return;
}

console.log("Player chose:", playerChoice);
console.log("Computer chose:", computer);
console.log(determineWinner(playerChoice, computer));
return 0;
