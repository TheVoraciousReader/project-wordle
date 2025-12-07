import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import SuccessBanner from "../SuccessBanner/SuccessBanner";
import FailBanner from "../FailBanner/FailBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("idle");

  const handleGuessList = (guess) => {
    if (guessList.length + 1 <= NUM_OF_GUESSES_ALLOWED) {
      const nextGuessList = [...guessList];
      const validation = checkGuess(guess, answer);
      nextGuessList.push({ id: crypto.randomUUID(), guess, validation });
      setGuessList(nextGuessList);

      if (guess === answer) {
        setGameStatus("success");
      } else if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("fail");
      }
    }
  };
  return (
    <>
      <GuessResults guessList={guessList} />
      <Guess handleGuessList={handleGuessList} gameStatus={gameStatus} />
      {gameStatus === "success" ? (
        <SuccessBanner guesses={guessList.length} />
      ) : gameStatus === "fail" ? (
        <FailBanner answer={answer} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Game;
