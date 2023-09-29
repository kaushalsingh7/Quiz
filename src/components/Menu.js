import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Context";

const Menu = () => {
  const { gameState, setGameState, username, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="Menu">
      <label>Enter Your Name : </label>
      <input
        type="text"
        placeholder="ex John Smith"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("Playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Menu;
