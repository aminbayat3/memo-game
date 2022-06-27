import { createContext, useState, useEffect } from "react";

import { CARD_DATA } from "../card-data";

export const CardContext = createContext({
  cards: [],
  shuffleCards: () => {},
  handleChoice: () => {},
  isChoiceTwo: false,
  choiceOne: null,
  setChoiceOne: () => {},
  choiceTwo: null,
  setChoiceTwo: () => {},
  disabled: true, 
  turns: 0,
});

const shuffle = () => {
  const shuffledCards = [...CARD_DATA, ...CARD_DATA]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));

  return shuffledCards;
};

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const flip = new Audio("/audio/flip.mp3");
  const match = new Audio("/audio/match.mp3");
  const victory = new Audio("/audio/victory.mp3");

  flip.pause();
  match.pause();
  victory.pause();

  useEffect(() => {
    const wait = setTimeout(() => setDisabled(false), 1300);

    return () => clearTimeout(wait);
  }, []);

  const shuffleCards = () => {
    setCards(shuffle());
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };

  const handleChoice = (card) => {
      flip.play();
      setTimeout(() => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
      }, 300);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.name === choiceTwo.name) {
        match.play();
        const matchedCards = () => {
          return cards.map((card) => {
            return card.name === choiceOne.name
              ? { ...card, matched: true }
              : card;
          });
        };
        setCards(matchedCards());
      }
      setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceTwo, choiceOne]);

  useEffect(() => {
    const isAllMatched = cards.find((card) => card.matched === false);
    if (turns !== 0 && isAllMatched === undefined) {
      setTimeout(() => victory.play(), 1000);
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const value = {
    cards,
    shuffleCards,
    handleChoice,
    choiceOne,
    choiceTwo,
    disabled,
    turns,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
