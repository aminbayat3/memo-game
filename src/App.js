import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import { CardContext } from "./context/card-context";
import CardGrid from './components/card-grid/card-grid.component';

import "./App.scss";

gsap.registerPlugin(TextPlugin);

function App() {
  const { shuffleCards, turns, disabled } = useContext(CardContext);
  const title = useRef();
  const button = useRef();


  // start a new game automatically
  useEffect(() => {
    gsap.to(title.current, { duration : 3, text: "Memo Game"});
    gsap.to('.turns', { duration: 3, text: `Turns: ${turns}`});
    gsap.fromTo(button.current, {scale: 0.7 }, { duration: 1, scale: 1});

    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1 ref={title}></h1>
      <button className={disabled ? 'disabled' : ''} onClick={shuffleCards} ref={button}>New Game</button>
      <CardGrid />
      <p className="turns"></p>
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
