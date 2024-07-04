import { getCategories, getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { usePagination } from "../../helpers/hooks/usePagination";

import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";

import NewsBanner from "../../components/newsBanner/NewsBanner";
import NewsList from "../../components/newsList/NewsList";
import Pagination from "../../components/pagination/Pagination";
import Categories from "../../components/categories/Categories";
import Search from "../../components/search/Search";

import styles from "./styles.module.css";


function Main() {
  const { pageNumber, handleClickPage, handleNextPage, handlePrevPage } = usePagination(TOTAL_PAGES);

  const { filters, changeFilter } = useFilters({
    pageSize: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    pageNumber,
    debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          activeCategory={filters.category}
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

      <NewsBanner isLoading={isLoading} item={data && data.news && data?.news[0]} />

      <Pagination
        currentPage={pageNumber}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handleClickPage={handleClickPage}
        handlePrevPage={handlePrevPage}
      />

      <NewsList isLoading={isLoading} items={data?.news} />

      <Pagination
        currentPage={pageNumber}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handleClickPage={handleClickPage}
        handlePrevPage={handlePrevPage}
      />
    </main>
  );
}

export default Main;
