import { TOTAL_PAGES } from "../../constants/constants";

import { useAppDispatch, useAppSelector } from "../../store";
import { newsApi } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import { useDebounce } from "../../helpers/hooks/useDebounce";

import NewsFilters from "../newsFilters/NewsFilters";
import NewsListWithSkeleton from "../newsList/NewsList";
import PaginationWrapper from "../paginationWrapper/PaginationWrapper";

import styles from "./styles.module.css";

function NewsByFilters() {
  const filters = useAppSelector(state => state.news.filters);
  const news = useAppSelector(state => state.news.news);

  const dispatch = useAppDispatch();

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { isLoading } = newsApi.useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handleClickPage = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };


  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handleClickPage={handleClickPage}
        handlePrevPage={handlePrevPage}
      >
        <NewsListWithSkeleton isLoading={isLoading} items={news} />
      </PaginationWrapper>
    </section>
  );
}

export default NewsByFilters;
