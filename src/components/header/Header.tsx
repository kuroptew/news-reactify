import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";
import formatDate from "../../helpers/formatDate";

import styles from "./styles.module.css";

function Header() {
  const {isDark, toggleTheme} = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>News Reactify</h1>
        <span className={styles.date}>{formatDate(new Date())}</span>
      </div>
      <img
        className={styles.icon}
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        alt="theme"
        onClick={toggleTheme}
      />
    </header>
  );
}

export default Header;
