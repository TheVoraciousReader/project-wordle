import React from "react";

function FailBanner({ answer, restartButton }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      {restartButton}
    </div>
  );
}

export default FailBanner;
