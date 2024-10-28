#!/usr/bin/node
/* ******************************************************** *
 * Simple clone of Paper Scissors Rock by robin Goerlach    *
 * ******************************************************** */

const path = require("path");
const validChoices = ["rock", "paper", "scissors"];

function getComputerMove() {
    const randomIndex = Math.floor(Math.random() * validChoices.length);
    //console.log("Computer chose:", validChoises[randomIndex]);
    return validChoices[randomIndex];
}

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "It's a draw!";
    }

    if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "scissors" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "rock")
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

const computerMove = getComputerMove();

// Assuming process.argv[1] contains the full path
const appPath = process.argv[1];
const appName = path.basename(appPath);
const argNo = process.argv.length;

// do we have enough aruments to start
if (argNo != 3) {
  console.error("You need to run ",appName ," with an argument Paper, Scissors or Rock would be good");
  return;
}

// Check valid move 
const playerChoice = process.argv[2].toLowerCase();
if (!validChoices.includes(playerChoice)) {
  console.error("Your choice is not understood, try Paper, Scissors or Rock");
  return;	
}

console.log("Player chose:", playerChoice);
console.log("Computer chose:", computerMove);
console.log(determineWinner(playerChoice, computerMove));
