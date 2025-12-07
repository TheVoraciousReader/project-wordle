import React from "react";
import SuccessBanner from "../SuccessBanner/SuccessBanner";
import FailBanner from "../FailBanner/FailBanner";

function GameOverBanner({ gameStatus, guesses, answer }) {
  return gameStatus === "success" ? (
    <>
      <SuccessBanner guesses={guesses} />
    </>
  ) : gameStatus === "fail" ? (
    <>
      <FailBanner answer={answer} />
    </>
  ) : (
    <></>
  );
}

export default GameOverBanner;
