import { startGame } from "./guessFunctions.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const START_MSG = `Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number. 
  \n\nPlease select the difficulty level:\n1. Easy (10 Chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n\nEnter your choice: `;

rl.question(START_MSG, (choice) => {
  const difficulty = Number(choice);
  if (difficulty <= 0 || difficulty > 3) {
    console.error(`Invalid difficulty level!`);
    rl.close();
  } else {
    let lives = 10;
    if (difficulty === 1) {
      console.log(
        `\n\nGreat! You have selected the Easy difficulty level.\nLet's start the game!`
      );
      lives = 9;
    } else if (difficulty === 2) {
      console.log(
        `\n\nGreat! You have selected the Medium difficulty level.\nLet's start the game!`
      );
      lives = 4;
    } else if (difficulty === 3) {
      console.log(
        `\n\nGreat! You have selected the Hard difficulty level.\n😈 Goodluck!`
      );
      lives = 2;
    }
    startGame(lives);
  }
});

export { rl };
