import React from "react";

function SuccessBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guesses} guess{guesses > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </div>
  );
}

export default SuccessBanner;
