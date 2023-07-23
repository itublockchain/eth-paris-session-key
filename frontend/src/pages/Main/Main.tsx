import styles from "./Main.module.scss";
import { CardsFight, Navbar } from "components";
import BACKGROUND from "assets/bg.png";
import { useDispatch } from "react-redux";
import { setDefenderCards, setAttackerCards } from "store/slicers/card";
import { useEffect } from "react";
import Lottie from "lottie-react";
import WIN from "assets/lottie/win.json";
import {
  apiGetLastGameAddress,
  apiGetLiveCards,
  apiGetAllCardList,
} from "restapi";
import { useAccount } from "wagmi";
import { setGameAddress, setGameEnd, setUserNumber } from "store/slicers/game";
import { useSelector } from "react-redux";
import { RootState } from "store";
const Main = () => {
  const { address } = useAccount();
  const gameEnd = useSelector((state: RootState) => state.game.end);
  const dispatch = useDispatch();
  const setup = async () => {
    const gamecontractAddress = await apiGetLastGameAddress();

    if (gamecontractAddress) {
      dispatch(setGameAddress(gamecontractAddress.data));
      const cards = await apiGetAllCardList(gamecontractAddress.data);
      if (cards) {
        if (cards.data[0][0].address === address) {
          dispatch(setUserNumber(0));
          dispatch(setAttackerCards(cards.data[0]));
          dispatch(setDefenderCards(cards.data[1]));
        } else {
          dispatch(setUserNumber(1));
          dispatch(setAttackerCards(cards.data[1]));
          dispatch(setDefenderCards(cards.data[0]));
        }
        if (cards.data[0].length === 0 || cards.data[1].length === 0)
          dispatch(setGameEnd(true));
      }
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setup();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.components}>
        <Navbar hideIt={true} />
        {address && (
          <>
            <CardsFight location="TOP" />
            <CardsFight location="BOTTOM" />
          </>
        )}
      </div>
      {gameEnd && (
        <div className={styles.win}>
          <Lottie
            animationData={WIN}
            loop={true}
            style={{
              width: "500px",
            }}
          />
        </div>
      )}
      <img src={BACKGROUND} className={styles.background} alt="background" />
    </div>
  );
};
export { Main };
