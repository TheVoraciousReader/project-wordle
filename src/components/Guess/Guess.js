import React from "react";

function Guess({ handleGuessList, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuessList(guess);
    setGuess("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess: </label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          required={true}
          disabled={gameStatus === "success" || gameStatus === "fail"}
          pattern="\w{5,5}"
          onChange={(e) => setGuess(e.target.value?.toUpperCase())}
        />
      </form>
      <p style={{ opacity: 0.5 }}>The guess should consist of 5 letters.</p>
    </>
  );
}

export default Guess;
