import React, { useState, useContext } from "react";
import "../App.css";
import { GameStateContext } from "../helpers/Context";
import { Questions } from "../helpers/Questions";
const Quiz = () => {
  const { score, setScore, gameState, setGameState } =
    useContext(GameStateContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const chooseOption = (option) => {
    setOptionChosen(option);
  };
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("OptionA");
          }}
        >
          {Questions[currentQuestion].OptionA}
        </button>
        <button
          onClick={() => {
            chooseOption("OptionB");
          }}
        >
          {Questions[currentQuestion].OptionB}
        </button>
        <button
          onClick={() => {
            chooseOption("OptionC");
          }}
        >
          {Questions[currentQuestion].OptionC}
        </button>
        <button
          onClick={() => {
            chooseOption("OptionD");
          }}
        >
          {Questions[currentQuestion].OptionD}
        </button>
      </div>
      {currentQuestion == Questions.length - 1 ? (
        <button
          onClick={() => {
            finishQuiz();
          }}
          id="nextQuestion"
        >
          Finish Quiz
        </button>
      ) : (
        <button
          onClick={() => {
            nextQuestion();
          }}
          id="nextQuestion"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
