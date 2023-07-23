import styles from "./CardSession.module.scss";
import { CardSelection, Navbar, EnterGameModal } from "components";
import BACKGROUND from "assets/bg.png";
import { useModal } from "hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setAllCards } from "store/slicers/game";
import { useEffect } from "react";
import { apiGetLiveCards } from "restapi";
const CardSession = () => {
  const dispatch = useDispatch();
  const enterGameModal = useModal();
  const gameAddress = useSelector((state: RootState) => state.game.address);

  const allCards = useSelector((state: RootState) => state.game.allCards);
  // error olabilir
  // useEffect(() => {
  //   if (allCards.length === 0) return;
  //   const setAllCardsApi = async () => {
  //     console.log("Istek attim");
  //     if (!gameAddress) return;

  //     console.log("Istek attim2");
  //     const cards = await apiGetLiveCards(gameAddress);

  //     console.log(cards);
  //     if (cards) {
  //       console.log(cards);
  //       // dispatch(setAllCards(cards.data));
  //     }
  //   };
  //   setAllCardsApi();
  // }, [gameAddress]);
  return (
    <div className={styles.wrapper}>
      {<EnterGameModal modal={enterGameModal} />}

      <div className={styles.components}>
        <Navbar openModal={enterGameModal.open} hideIt={false} />
        {gameAddress && <CardSelection />}
      </div>
      <img src={BACKGROUND} className={styles.background} alt="background" />
    </div>
  );
};
export { CardSession };
