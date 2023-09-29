import "./App.css";
import Menu from "./components/Menu";
import EndScreen from "./components/EndScreen";
import Quiz from "./components/Quiz";
import { GameStateContext } from "./helpers/Context";
import { useState } from "react";
function App() {
  // ["Menu","Playing","Finished"]
  const [gameState, setGameState] = useState("Menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "Menu" && <Menu />}
        {gameState === "Playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
