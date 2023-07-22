import styles from "./Navbar.module.scss";
import { useContractRead } from "wagmi";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ABI } from "constants/abi";
import { ADDRESS } from "constants/address";
type NavbarProps = {
  openModal?: () => void;
};
const Navbar = ({ openModal }: NavbarProps) => {
  const {
    data: factoryData,
    isError,
    isLoading,
  } = useContractRead({
    address: ADDRESS.factory,
    abi: ABI.factory,
    functionName: "createGame",
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>CardSession</div>
      <div>-</div>
      <div className={styles.buttons}>
        <button onClick={openModal}>Enter Game</button>
        <ConnectButton />
      </div>
    </div>
  );
};
export { Navbar };
