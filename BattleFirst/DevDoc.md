# Developer Documentation for BattleFirst (Paper Scissors Rock Game)

## Overview

This project is a simple command-line game called **BattleFirst**, which is a clone of the classic Paper Scissors Rock game. The game allows the user to make a choice, then compares it with a randomly chosen move by the computer to determine the winner.

## Project Structure

- **Entry Point**: `BattleFirst.js`
- **Primary Functions**:
    - `getComputerMove()`
    - `determineWinner(playerMove, computerMove)`

## Requirements

- **Node.js** (Make sure Node.js is installed on your machine to execute this JavaScript file in the terminal)

## Installation

Clone the repository to your local machine:

`git clone <repository-url>`

Navigate to the project directory:

`cd BattleFirst`

Ensure the script has execution permissions:

`chmod +x BattleFirst.js`

## Usage

To play the game, use the following command in the terminal:

`node BattleFirst.js <choice>`

### Example

`node BattleFirst.js rock`

### Expected Output

- **If the player and computer choose the same move**: `"It's a draw!"`
- **If the player wins**: `"Player wins!"`
- **If the computer wins**: `"Computer wins!"`

## Code Explanation

### Imports

`const path = require("path");`

- **path**: This built-in Node.js module is used to handle and transform file paths, specifically for fetching the app's name.

### Variables and Constants

`const validChoices = ["rock", "paper", "scissors"];`

- **validChoices**: An array holding the valid moves. This ensures that only valid moves are used in the game logic.

### Functions

#### `getComputerMove()`

Generates a random move for the computer based on the `validChoices` array.

`function getComputerMove() {     const randomIndex = Math.floor(Math.random() * validChoices.length);     return validChoices[randomIndex]; }`

- **randomIndex**: A random integer that indexes into `validChoices` to get the computer's choice.

#### `determineWinner(playerMove, computerMove)`

Determines the outcome of the game by comparing the player's choice with the computer's choice.

`function determineWinner(playerMove, computerMove) {     if (playerMove === computerMove) {         return "It's a draw!";     }     if (         (playerMove === "rock" && computerMove === "scissors") ||         (playerMove === "scissors" && computerMove === "paper") ||         (playerMove === "paper" && computerMove === "rock")     ) {         return "Player wins!";     } else {         return "Computer wins!";     } }`

### Main Code Execution

- **Player Choice Verification**:
    - The game checks if the provided player choice is one of the valid choices. If not, it prompts the user to try again with a valid move.
- **Output**:
    - Displays both the player's and computer's choices, followed by the game result.

### Sample Output

`Player chose: rock Computer chose: scissors Player wins!`

## Error Handling

- **Invalid Input**: If the player does not provide a valid move (rock, paper, or scissors), the game exits with an error message explaining the required input.

## Potential Enhancements

- **Scoring System**: Implement a scoring system to keep track of the player's and computer's scores across multiple rounds.
- **User Interface**: Add a graphical interface for a more interactive user experience.
- **Move Variants**: Introduce additional moves, such as "Lizard" and "Spock," for a more complex game.

## License

This project is available under the MIT License. See the LICENSE file for more details.
