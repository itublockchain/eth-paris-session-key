import styles from "./Cards.module.scss";
import { Card } from "components";

const Cards = ({ location }: { location: "TOP" | "BOTTOM" }) => {
  return (
    <div className={styles.wrapper}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export { Cards };
