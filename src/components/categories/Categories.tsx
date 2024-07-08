import { ForwardedRef, forwardRef } from "react";

import styles from "./styles.module.css";
import { CategoriesType } from "../../types";

interface Props {
  categories: CategoriesType[];
  activeCategory: CategoriesType | null;
  setCategory: (category: CategoriesType | null) => void; 
}

const Categories = forwardRef(({ categories, activeCategory, setCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
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
