import React from "react";
import SuccessBanner from "../SuccessBanner/SuccessBanner";
import FailBanner from "../FailBanner/FailBanner";

function GameOverBanner({ gameStatus, guesses, answer, restartGame }) {
  const restartButton = (
    <button onClick={restartGame}> Click here to restart the game. </button>
  );

  return gameStatus === "success" ? (
    <>
      <SuccessBanner guesses={guesses} restartButton={restartButton} />
    </>
  ) : gameStatus === "fail" ? (
    <>
      <FailBanner answer={answer} restartButton={restartButton} />
    </>
  ) : (
    <></>
  );
}

export default GameOverBanner;
