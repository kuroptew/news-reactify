import styles from "./styles.module.css";

function Search({ value, changeValue }) {
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
