import { useContext, useRef, useEffect } from "react";
import { gsap } from "gsap";

import Card from "../card/card.component";
import { CardContext } from "../../context/card-context";

import "./card-grid.styles.scss";

const CardGrid = () => {
  const { cards, choiceOne, choiceTwo, disabled } = useContext(CardContext);

  const el = useRef();
  const q = gsap.utils.selector(el); // we can also use a gsap utility function to shuffle cards( gsap.utils.shuffle(cards))
  const checkId = cards.length ? (cards[0].id) : null; // using a condition in useEffect // we did that so every time we make a new Game the animation still works.

  useEffect(() => {
    if (cards.length) {
      console.log("useEffect");
      gsap.from(q(".card"), { duration: 1, opacity: 0, scale: 0.1, stagger: { each: 0.2, from: "center" , grid: 'auto'} });  //remember if the animation continues we need to clean it up but here we dont need to because it's going to happen once
    }
  }, [cards.length, checkId]);

  return (
    <div className="card-grid" ref={el}>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default CardGrid;
