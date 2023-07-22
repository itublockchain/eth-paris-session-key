import styles from "./Main.module.scss";
import { Cards, Navbar } from "components";
import BACKGROUND from "assets/bg.png";
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
