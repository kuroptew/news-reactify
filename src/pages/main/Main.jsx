import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

import NewsBanner from "../../components/newsBanner/NewsBanner";
import NewsList from "../../components/newsList/NewsList";
import Skeleton from "../../components/skeleton/Skeleton";

import styles from "./styles.module.css";
import Pagination from "../../components/pagination/Pagination";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = 10;

  async function fetchNews(currentPage) {
    try {
      setIsLoading(true);
      const response = await getNews({ currentPage, pageSize });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleClickPage(numberPage) {
    setCurrentPage(numberPage);
  }

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton type="banner" />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handleClickPage={handleClickPage}
        handlePrevPage={handlePrevPage}
      />
      {!isLoading ? <NewsList items={news} /> : <Skeleton type="item" count={10} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handleClickPage={handleClickPage}
        handlePrevPage={handlePrevPage}
      />
    </main>
  );
}

export default Main;
