import LatestNews from "../../components/latestNews/LatestNews";
import NewsByFilters from "../../components/newsByFilters/NewsByFilters";

import styles from "./styles.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}

export default Main;

