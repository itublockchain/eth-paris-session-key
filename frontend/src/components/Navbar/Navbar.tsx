import styles from "./Navbar.module.scss";
import { useContractRead, useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ABI } from "constants/abi";
import LOGO from "assets/logo.png";
import { ADDRESS } from "constants/address";
type NavbarProps = {
  openModal?: () => void;
  hideIt: boolean;
};
const Navbar = ({ openModal, hideIt = false }: NavbarProps) => {
  const { address } = useAccount();

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={LOGO} alt="logo"></img>
      </div>
      <div>-</div>
      <div className={styles.buttons}>
        {address && !hideIt && (
          <button onClick={openModal} className={styles.button}>
            Enter Game
          </button>
        )}
        <ConnectButton showBalance={false} chainStatus={"none"} />
      </div>
    </div>
  );
};
export { Navbar };
