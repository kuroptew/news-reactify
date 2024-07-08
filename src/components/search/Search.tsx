import styles from "./styles.module.css";

interface Props {
  value: string;
  changeValue: (value: string) => void;
}

function Search({ value, changeValue }: Props) {
  return (
    <form className={styles.search}>
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
