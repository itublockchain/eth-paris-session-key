import styles from "./CardSession.module.scss";
import { CardSelection, Navbar } from "components";
import BACKGROUND from "assets/background.png";

const CardSession = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.components}>
        <Navbar />
        <CardSelection />
      </div>
      <img src={BACKGROUND} className={styles.background} alt="background" />
    </div>
  );
};
export { CardSession };
