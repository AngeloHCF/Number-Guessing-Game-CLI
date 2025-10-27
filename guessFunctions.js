import { rl } from "./numberGuessingGame.js";
import { randomNumber } from "./randomNumber.js";

function startGame(lives) {
  const numberToGuess = randomNumber();
  rl.output.write("Enter your number: ");

  rl.on("line", (guessInput) => {
    const guess = Number(guessInput);
    if (guess === numberToGuess && lives > 0) {
      console.log(
        `\n\nCorrect! The number is ${numberToGuess}!\nYou had ${lives} lives left.`
      );
      rl.close();
    } else {
      if (lives > 0) {
        console.log(
          `\n\nIncorrect! The number is ${
            guess > numberToGuess ? "less" : "greater"
          } than ${guess}\nYou have ${lives} left.`
        );
        lives--;
        rl.output.write("Enter your number: ");
      } else if (lives === 0) {
        console.log(
          `\n\nYou ran out of lives! The number was ${numberToGuess}, thanks for you playing :D.`
        );
        rl.close();
      }
    }
  });
}

export { startGame };
