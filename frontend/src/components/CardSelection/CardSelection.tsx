import styles from "./CardSelection.module.scss";
import { CardInfo } from "store/slicers/card";
import { Card } from "./Card/Card";
import { useState } from "react";
const cardInfo: Array<CardInfo> = [
  { id: 0, heal: 4, power: 3 },
  { id: 1, heal: 6, power: 2 },
  { id: 2, heal: 2, power: 7 },
  { id: 3, heal: 1, power: 9 },
  { id: 4, heal: 9, power: 1 },
  { id: 5, heal: 2, power: 7 },
  { id: 6, heal: 1, power: 9 },
  { id: 7, heal: 9, power: 1 },
  { id: 8, heal: 2, power: 7 },
  { id: 9, heal: 1, power: 9 },
];
const CardSelection = () => {
  const [selectedCard, setSelectedCard] = useState<number>(-1);
  return (
    <div className={styles.wrapper}>
      {cardInfo.map((card: CardInfo, i: number) => {
        return (
          <Card
            id={card.id}
            key={card.id}
            heal={card.heal}
            power={card.power}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        );
      })}

      <button
        className={styles.button}
        onClick={() => {
          window.location.href = "/fight";
        }}
      >
        Start
      </button>
    </div>
  );
};
export { CardSelection };
