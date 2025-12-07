import React from "react";

function SuccessBanner({ guesses, restartButton }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guesses} guess{guesses > 1 ? "es" : ""}
        </strong>
        .
      </p>
      {restartButton}
    </div>
  );
}

export default SuccessBanner;
