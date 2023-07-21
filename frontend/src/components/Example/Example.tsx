import styles from "./Example.module.scss";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "hooks/useTheme";

const Example = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.wrapper}>
      Example Component
      <div
        className={styles.themeChanger}
        onClick={toggleTheme}
        style={theme === "light" ? { color: "#363853" } : { color: "white" }}
      >
        {theme === "dark" ? <IoMdMoon size={22} /> : <IoMdSunny size={22} />}
      </div>
    </div>
  );
};
export { Example };
