import { ModalController } from "hooks/useModal";
import styles from "./EnterGameModal.module.scss";
import { Modal } from "ui";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { apiCreateNewGame, apiGetLastGameAddress } from "restapi";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { setGameAddress } from "store/slicers/game";
import { ABI } from "constants/abi";
import { useEffect, useState } from "react";
import { Contract } from "ethers";
import { useGetGameContract } from "hooks/useGetGameContract";
import { useGetProvider } from "hooks/useGetProvider";
const EnterGameModal = ({ modal }: { modal: ModalController }) => {
  const [contract, setContract] = useState<`0x${string}`>(
    "0x41C3CB3F3EdCf7CEfb15BAb54b94E4a104137642"
  );
  const { address } = useAccount();
  const dispatch = useDispatch();
  const wallet = useGetProvider().getWallet();
  const gameAddress = useSelector((state: RootState) => state.game.address);
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: contract,
    abi: ABI.cardGame,
    functionName: "enter",
    args: [address],
  });
  const handleEnterClick = () => {
    if (!gameAddress) return;
    if (gameAddress) {
      write();
      modal.close();
    }
  };
  const handleSearchClick = async () => {
    if (gameAddress) return;
    const address = await apiGetLastGameAddress();
    if (address) {
      dispatch(setGameAddress(address.data));
      setContract(address.data as `0x${string}`);
    }
  };
  const handleCreateClick = async () => {
    const address = await apiCreateNewGame();
    if (address) {
      dispatch(setGameAddress(address.data));
      setContract(address.data as `0x${string}`);
    }
  };

  return (
    <Modal isOpen={modal.isOpen} close={modal.close} className={styles.wrapper}>
      <div>Welcome to SessionCard</div>
      <div className={styles.a}>
        {!gameAddress ? (
          <button onClick={handleSearchClick} className={styles.button1}>
            Search Game
          </button>
        ) : (
          <button onClick={handleEnterClick} className={styles.button1}>
            Enter Game
          </button>
        )}
        {!gameAddress && (
          <button className={styles.button2} onClick={handleCreateClick}>
            Create Game
          </button>
        )}
      </div>
    </Modal>
  );
};
export { EnterGameModal };
