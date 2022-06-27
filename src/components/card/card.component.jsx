import { useContext, useRef } from "react";

import { CardContext } from "../../context/card-context";

import "./card.styles.scss";

const Card = ({ card, flipped, disabled }) => {
  const { src } = card;
  const { handleChoice } = useContext(CardContext);

  const choiceHandler = (event) => {
    event.preventDefault();
    handleChoice(card);
  };

  return (
    <div className={`${disabled ? "disabled" : ""} card`}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={choiceHandler}
        />
      </div>
    </div>
  );
};

export default Card;
