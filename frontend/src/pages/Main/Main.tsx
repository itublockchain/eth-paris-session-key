import styles from "./Main.module.scss";
import { CardsFight, Navbar } from "components";
import BACKGROUND from "assets/bg.png";
import { useDispatch } from "react-redux";
import { setDefenderCards, setAttackerCards } from "store/slicers/card";
import { useEffect } from "react";
import { apiGetLastGameAddress, apiGetLiveCards } from "restapi";
import { useAccount } from "wagmi";
import { setGameAddress } from "store/slicers/game";

const Main = () => {
  const { address } = useAccount();
  const dispatch = useDispatch();
  const setup = async () => {
    const gamecontractAddress = await apiGetLastGameAddress();

    if (gamecontractAddress) {
      dispatch(setGameAddress(gamecontractAddress.data));
      const cards = await apiGetLiveCards(gamecontractAddress.data);
      if (cards) {
        console.log(cards.data[0][0].address, address);
        if (cards.data[0][0].address === address) {
          dispatch(setAttackerCards(cards.data[0]));
          dispatch(setDefenderCards(cards.data[1]));
        } else {
          dispatch(setAttackerCards(cards.data[1]));
          dispatch(setDefenderCards(cards.data[0]));
        }
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
        <Navbar />
        {address && (
          <>
            <CardsFight location="TOP" />
            <CardsFight location="BOTTOM" />
          </>
        )}
      </div>
      <img src={BACKGROUND} className={styles.background} alt="background" />
    </div>
  );
};
export { Main };
