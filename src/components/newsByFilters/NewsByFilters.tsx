import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";

import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { usePagination } from "../../helpers/hooks/usePagination";
import { NewsApiResponse, ParamsType } from "../../types";

import NewsFilters from "../newsFilters/NewsFilters";
import NewsListWithSkeleton from "../newsList/NewsList";
import PaginationWrapper from "../paginationWrapper/PaginationWrapper";

import styles from "./styles.module.css";

function NewsByFilters() {
  const { page_number, handleClickPage, handleNextPage, handlePrevPage } = usePagination(TOTAL_PAGES);

  const { filters, changeFilter } = useFilters({
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    page_number,
    keywords:debouncedKeywords,
  });


  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top
        bottom
        currentPage={page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handleClickPage={handleClickPage}
        handlePrevPage={handlePrevPage}
      >
        <NewsListWithSkeleton isLoading={isLoading} items={data?.news} />
      </PaginationWrapper>
    </section>
  );
}

export default NewsByFilters;
