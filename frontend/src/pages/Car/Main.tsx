import styles from "./Main.module.scss";
import { Cards, Example, Navbar } from "components";
import BACKGROUND from "assets/background.png";
const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.components}>
        <Navbar />
        <Cards location="TOP" />
        <Cards location="BOTTOM" />
      </div>
      <img src={BACKGROUND} className={styles.background} alt="background" />
    </div>
  );
};
export { Main };
