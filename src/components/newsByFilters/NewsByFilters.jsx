import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";

import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { usePagination } from "../../helpers/hooks/usePagination";

import NewsFilters from "../newsFilters/NewsFilters";
import NewsListWithSkeleton from "../newsList/NewsList";
import PaginationWrapper from "../paginationWrapper/PaginationWrapper";

import styles from "./styles.module.css";

function NewsByFilters() {
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

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        currentPage={pageNumber}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handleClickPage={handleClickPage}
        handlePrevPage={handlePrevPage}
      >
        <NewsListWithSkeleton isLoading={isLoading} items={data && data.news} />
      </PaginationWrapper>
    </section>
  );
}

export default NewsByFilters;
