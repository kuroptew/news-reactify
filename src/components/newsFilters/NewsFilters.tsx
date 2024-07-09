import { getCategories } from "../../api/apiNews";
import { useTheme } from "../../context/ThemeContext";
import { useFetch } from "../../helpers/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../types";

import Categories from "../categories/Categories";
import Search from "../search/Search";
import Slider from "../slider/Slider";

import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string  | null) => void;
}

function NewsFilters({ filters, changeFilter }: Props) {
  const { isDark } = useTheme();
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);


  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider isDark = {isDark}>
          <Categories
            categories={dataCategories.categories}
            activeCategory={filters.category}
            setCategory={(category) => {
              changeFilter("category", category);
            }
          }
          />
        </Slider>
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
