import React, { useContext } from "react";
import { GameStateContext } from "../helpers/Context";
import { Questions } from "../helpers/Questions";
function EndScreen() {
  const { score, setScore, setGameState, userName } =
    useContext(GameStateContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("Menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished !</h1>
      <h2 className="name">{userName}</h2>
      <h1>
        {" "}
        Score : {score} / {Questions.length}{" "}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
