import { clsnm } from "utils/clsnm";
import styles from "./Cards.module.scss";
import { Card } from "components";
import { CardInfo, setAttackerCard } from "store/slicers/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect } from "react";
import { setDefenderCard } from "store/slicers/card";
const Cards = ({ location }: { location: "TOP" | "BOTTOM" }) => {
  const dispatch = useDispatch();
  const attackerCard = useSelector(
    (state: RootState) => state.card.attackerCard
  );
  const defenderCard = useSelector(
    (state: RootState) => state.card.defenderCard
  );
  const attackerCards = useSelector(
    (state: RootState) => state.card.attackerCards
  );
  const defenderCards = useSelector(
    (state: RootState) => state.card.defenderCards
  );

  useEffect(() => {
    if (attackerCard === -1) {
      dispatch(setDefenderCard(-1));
    }
    if (defenderCard !== -1 && attackerCard !== -1) {
      setTimeout(() => {
        dispatch(setDefenderCard(-1));
        dispatch(setAttackerCard(-1));
      }, 700);
    }
  }, [attackerCard, defenderCard]);
  return (
    <div
      className={
        location === "TOP"
          ? clsnm(styles.wrapper, styles.top)
          : clsnm(styles.wrapper, styles.bottom)
      }
    >
      {location === "TOP" &&
        defenderCards.map((card: CardInfo, i: number) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              heal={card.heal}
              power={card.power}
              location={setLocation(defenderCards.length, i, location)}
              who={"ENEMY"}
            />
          );
        })}
      {location === "BOTTOM" &&
        attackerCards.map((card: CardInfo, i: number) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              heal={card.heal}
              power={card.power}
              location={setLocation(attackerCards.length, i, location)}
              who={"ME"}
            />
          );
        })}
    </div>
  );
};
export { Cards };

function setLocation(total: number, i: number, type: "TOP" | "BOTTOM"): number {
  if (total === 0) return 0;
  const mark = type === "BOTTOM" ? 1 : -1;
  const space = 15;
  const origin = total / 2;
  if (total % 2 === 0) {
    const distance = Math.abs(origin - i) - 0.5;
    return distance * space * mark;
  } else {
    const distance = Math.abs(origin - i);
    return distance * space * mark;
  }
}
