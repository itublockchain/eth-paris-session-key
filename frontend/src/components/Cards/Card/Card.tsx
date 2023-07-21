import styles from "./Card.module.scss";
import CARD from "assets/card.png";

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <img src={CARD} className={styles.card} alt="card" />
    </div>
  );
};
export { Card };
