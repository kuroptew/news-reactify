import { forwardRef } from "react";

import styles from "./styles.module.css";

const Categories = forwardRef(({ categories, activeCategory, setCategory }, ref) => {
  return (
    <div ref={ref} className={styles.categories}>
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
});

Categories.displayName = "Categories";

export default Categories;
