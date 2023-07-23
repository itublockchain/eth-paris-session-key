import styles from "./Card.module.scss";
import CARD from "assets/cards/bgOfCard.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

import { clsnm } from "utils/clsnm";

const Card = ({
  power = 9,
  heal = 9,
  id,
  setSelectedCard,
  selectedCard,
}: {
  power: number;
  heal: number;
  id: number;
  setSelectedCard: (id: number) => void;
  selectedCard: number;
}) => {
  const dispatch = useDispatch();
  const attackerCard = useSelector(
    (state: RootState) => state.card.attackerCard
  );

  const handleClick = () => {
    if (selectedCard === id) {
      setSelectedCard(-1);
    } else {
      setSelectedCard(id);
    }
  };

  return (
    <div
      className={
        selectedCard === id
          ? clsnm(styles.wrapper, styles.selected)
          : styles.wrapper
      }
      onClick={handleClick}
    >
      <img src={CARD} className={styles.card} alt="card" />
    </div>
  );
};
export { Card };
