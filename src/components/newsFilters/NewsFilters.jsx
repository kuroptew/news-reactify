import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../categories/Categories";
import Search from "../search/Search";

import styles from "./styles.module.css";

function NewsFilters({ filters, changeFilter }) {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          activeCategory={filters.category}
          f
          setCategory={(category) => {
            changeFilter("category", category);
          }}
        />
      ) : null}

      <Search
        value={filters.keywords}
        changeValue={(keywords) => {
          changeFilter("keywords", keywords);
        }}
      />
    </div>
  );
}

export default NewsFilters;
