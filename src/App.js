import { useContext, useEffect } from "react";

import { CardContext } from "./context/card-context";
import CardGrid from './components/card-grid/card-grid.component';

import "./App.scss";

function App() {
  const { shuffleCards, turns, disabled } = useContext(CardContext);

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button className={disabled ? 'disabled' : ''} onClick={shuffleCards}>New Game</button>
      <CardGrid />
      <p>Turns: {turns} </p>
    </div>
  );
}

export default App;

//#0e1555
//#4e1184
//#932b77
//#fd367e

//#000033
//#0066cc
//#0099ff
//#ededed
