import { useTheme } from "../../context/ThemeContext";

import styles from "./styles.module.css";

interface Props {
  value: string;
  changeValue: (value: string) => void;
}

function Search({ value, changeValue }: Props) {
  const { isDark } = useTheme();

  return (
    <form className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        placeholder="Find news..."
      />
    </form>
  );
}

export default Search;
