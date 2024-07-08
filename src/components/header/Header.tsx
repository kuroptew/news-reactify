import formatDate from "../../helpers/formatDate";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>News Reactify</h1>
      <span className={styles.date}>{formatDate(new Date())}</span>
    </header>
  );
}

export default Header;
