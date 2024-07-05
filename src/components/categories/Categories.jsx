import styles from "./styles.module.css";

function Categories({ categories, activeCategory, setCategory }) {
  return (
    <div className={styles.categories}>
      <button onClick={() => setCategory(null)} className={!activeCategory ? styles.active : styles.item}>
        all
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? styles.active : styles.item}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
