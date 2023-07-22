import styles from "./Navbar.module.scss";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>CardSession</div>
      <div>-</div>
      <ConnectButton />
    </div>
  );
};
export { Navbar };
