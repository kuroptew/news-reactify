import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import NewsFilters from "../../../../widgets/news/ui/NewsFilters/NewsFilters";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";

import styles from "./styles.module.css";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const { data } = useGetCategoriesQuery(null);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });



  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
      isLoading={isLoading}
      filters={filters}
      news={news}
      />
    </section>
  );
};

export default NewsByFilters;
