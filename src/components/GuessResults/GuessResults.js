import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((idx) => (
        <p key={idx} className="guess">
          {range(0, 5).map((_, index) => (
            <span
              key={index}
              className={`cell ${
                guessList[idx]?.validation?.length > 0
                  ? guessList[idx]?.validation[index]?.status
                  : " "
              }`}
            >
              {guessList[idx]?.guess[index]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
