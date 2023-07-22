import styles from "./CardSession.module.scss";
import { CardSelection, Navbar, EnterGameModal } from "components";
import BACKGROUND from "assets/background.png";
import { useModal } from "hooks/useModal";
import { useSelector } from "react-redux";
import { RootState } from "store";

const CardSession = () => {
  const enterGameModal = useModal();
  const gameAddress = useSelector((state: RootState) => state.game.address);
  return (
    <div className={styles.wrapper}>
      {!gameAddress && <EnterGameModal modal={enterGameModal} />}

      <div className={styles.components}>
        <Navbar openModal={enterGameModal.open} />
        {gameAddress && <CardSelection />}
      </div>
      <img src={BACKGROUND} className={styles.background} alt="background" />
    </div>
  );
};
export { CardSession };
