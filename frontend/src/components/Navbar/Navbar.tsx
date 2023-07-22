import styles from "./Navbar.module.scss";
import { useContractRead, useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ABI } from "constants/abi";
import { ADDRESS } from "constants/address";
type NavbarProps = {
  openModal?: () => void;
};
const Navbar = ({ openModal }: NavbarProps) => {
  const { address } = useAccount();
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
        {address && <button onClick={openModal}>Enter Game</button>}
        <ConnectButton showBalance={false} chainStatus={"none"} />
      </div>
    </div>
  );
};
export { Navbar };
