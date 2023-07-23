import styles from "./Card.module.scss";
import CARD from "assets/card.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setAttackerCard, setDefenderCard } from "store/slicers/card";
import { clsnm } from "utils/clsnm";
import Lottie from "lottie-react";
import { CARDIMAGES } from "constants/cards";
import EXPLOSION from "assets/lottie/explosion.json";
import { Cards } from "restapi/types";
const Card = ({
  power = 9,
  heal = 9,
  location = 0,
  id,
  keyId,
  who = "ME",
}: {
  power: number;
  heal: number;
  location: number;
  id: number;
  keyId: number;
  who: "ME" | "ENEMY";
}) => {
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

  const handleClick = () => {
    if (who === "ENEMY") {
      if (attackerCard === -1) {
        dispatch(setDefenderCard(-1));
      } else if (defenderCard !== id) {
        dispatch(setDefenderCard(id));
      } else {
        dispatch(setDefenderCard(-1));
      }
    } else {
      if (attackerCard !== id) {
        dispatch(setAttackerCard(id));
      } else {
        dispatch(setAttackerCard(-1));
      }
    }
  };

  return (
    <div
      className={
        who === "ME" && attackerCard === id && defenderCard !== -1
          ? clsnm(styles.wrapper, styles.selected, styles.clicked)
          : attackerCard === id && who === "ME"
          ? clsnm(styles.wrapper, styles.selected)
          : styles.wrapper
      }
      style={{
        marginTop: `${location}px`,
        transform:
          who === "ME" &&
          attackerCard === id &&
          defenderCard !== -1 &&
          attackerCards.length !== 0 &&
          defenderCards.length !== 0
            ? `translate(${setAttackLocation(
                keyId,
                getId(defenderCards, defenderCard),
                // defenderCard,
                attackerCards.length,
                defenderCards.length
              )}px, -240%) scale(1.2)`
            : who === "ME" && attackerCard === id && defenderCard === -1
            ? `scale(1.2)`
            : "",
      }}
      onClick={handleClick}
    >
      <img src={CARDIMAGES[id]} className={styles.card} alt="card" />
      <div className={styles.power}>{power}</div>
      <div className={styles.heal}>{heal}</div>
      {attackerCard !== -1 && defenderCard === id && who === "ENEMY" && (
        <div className={styles.explosion}>
          <Lottie
            animationData={EXPLOSION}
            loop={true}
            style={{
              width: "170px",
            }}
          />
        </div>
      )}
    </div>
  );
};
export { Card };

function setAttackLocation(
  aID: number,
  dID: number,
  aL: number,
  dL: number
): number {
  let aLocation;
  let dLocation;
  if (aL % 2 === 0) {
    const origin = aL / 2;
    const distance = origin - aID;
    aLocation = distance * 100;
  } else {
    const origin = aL / 2 - 0.5;
    const distance = origin - aID;
    aLocation = distance * 100;
  }

  if (dL % 2 === 0) {
    const origin = aL / 2;
    const distance = origin - dID;
    dLocation = distance * 100;
  } else {
    const origin = aL / 2 - 0.5;
    const distance = origin - dID;
    dLocation = distance * 100;
  }

  return (dLocation - aLocation) * -1;
}

function getId(cards: Array<Cards>, id: number): number {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].id === id) {
      return i;
    }
  }
  return 0;
}
