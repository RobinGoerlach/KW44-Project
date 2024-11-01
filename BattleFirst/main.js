#!/usr/bin/node
/* ******************************************************** *
 * Simple clone of Paper Scissors Rock by Robin Goerlach    *
 * ******************************************************** */

const path = require("path");
const validChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * validChoices.length);
  //console.log("Computer chose:", validChoises[index]);
  return validChoices[index];
}

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
  } else {
    return "Computer wins!";
  }
}

const computer = getComputerChoice();

// Assuming process.argv[1] contains the full path
const appPath = process.argv[1];
const appName = path.basename(appPath);
const argNo = process.argv.length;

// do we have enough aruments to start
if (argNo != 3) {
  console.error(
    "\nYou need to run ",
    appName,
    " with an argument nPaper, Scissors or Rock would be good!\n"
  );
  return;
}

// Check valid move
const playerChoice = process.argv[2].toLowerCase();
if (!validChoices.includes(playerChoice)) {
  console.error("Your choice is not understood, try Paper, Scissors or Rock");
  return;
}

console.log("Player chose:", playerChoice);
console.log("Computer chose:", computer);
console.log(determineWinner(playerChoice, computer));
