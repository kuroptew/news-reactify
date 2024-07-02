import styles from "./styles.module.css";

function Categories({ categories, activeCategory, setCategory }) {
  return (
    <div className={styles.categories}>
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
