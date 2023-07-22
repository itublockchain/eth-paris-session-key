import { clsnm } from "utils/clsnm";
import styles from "./CardsFight.module.scss";
import { Card } from "components";
import { CardInfo, setAttackerCard } from "store/slicers/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect } from "react";
import { setDefenderCard } from "store/slicers/card";
import { Cards } from "restapi/types";

import { useContractWrite } from "wagmi";
import { ABI } from "constants/abi";
const CardsFight = ({ location }: { location: "TOP" | "BOTTOM" }) => {
  const dispatch = useDispatch();
  const attackerCard = useSelector(
    (state: RootState) => state.card.attackerCard
  );
  const gameAddress = useSelector((state: RootState) => state.game.address);
  const defenderCard = useSelector(
    (state: RootState) => state.card.defenderCard
  );
  const attackerCards = useSelector(
    (state: RootState) => state.card.attackerCards
  );
  const defenderCards = useSelector(
    (state: RootState) => state.card.defenderCards
  );

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: gameAddress
      ? (gameAddress as `0x${string}`)
      : ("0x41C3CB3F3EdCf7CEfb15BAb54b94E4a104137642" as `0x${string}`),
    abi: ABI.cardGame,
    functionName: "attack",
  });
  useEffect(() => {
    if (attackerCard === -1) {
      dispatch(setDefenderCard(-1));
    }
    if (defenderCard !== -1 && attackerCard !== -1) {
      write({
        args: [attackerCard, defenderCard],
      });
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
        defenderCards.map((card: Cards, i: number) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              heal={card.health}
              power={card.power}
              location={setLocation(defenderCards.length, i, location)}
              who={"ENEMY"}
            />
          );
        })}
      {location === "BOTTOM" &&
        attackerCards.map((card: Cards, i: number) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              heal={card.health}
              power={card.power}
              location={setLocation(attackerCards.length, i, location)}
              who={"ME"}
            />
          );
        })}
    </div>
  );
};
export { CardsFight };

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
