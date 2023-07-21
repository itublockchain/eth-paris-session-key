import styles from "./Main.module.scss";
import { Example } from "components";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Example />
    </div>
  );
};
export { Main };
