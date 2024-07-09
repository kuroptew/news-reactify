import { useTheme } from "../../context/ThemeContext";
import { useAppDispatch } from "../../store";
import { newsApi } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import { IFilters } from "../../types";

import Categories from "../categories/Categories";
import Search from "../search/Search";
import Slider from "../slider/Slider";

import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
}

function NewsFilters({ filters }: Props) {
  const { isDark } = useTheme();
  const { data } = newsApi.useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();


  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark = {isDark}>
          <Categories
            categories={data.categories}
            activeCategory={filters.category}
            setCategory={(category) => {
              dispatch(setFilters({ key: "category", value: category }))
            }
          }
          />
        </Slider>
      ) : null}

      <Search
        value={filters.keywords}
        changeValue={(keywords) => {
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }}
      />
    </div>
  );
}

export default NewsFilters;
