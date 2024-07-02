import { useEffect, useState } from "react";
import { getCategories, getNews } from "../../api/apiNews";

import NewsBanner from "../../components/newsBanner/NewsBanner";
import NewsList from "../../components/newsList/NewsList";
import Skeleton from "../../components/skeleton/Skeleton";
import Pagination from "../../components/pagination/Pagination";
import Categories from "../../components/categories/Categories";

import styles from "./styles.module.css";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState("all")
  const pageSize = 10;
  const totalPages = 10;

  async function fetchNews(currentPage, activeCategory) {
    try {
      setIsLoading(true);
      const response = await getNews({ pageNumber: currentPage, pageSize, category : activeCategory });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

    async function fetchCategories() {
      try {
        const response = await getCategories();
        setCategories(["all", ...response.categories]);
      } catch (error) {
        console.log(error);
      }
    }

  useEffect(() => {
    fetchNews(currentPage, activeCategory);
  }, [currentPage, activeCategory]);

  useEffect(() => {
    fetchCategories()
  }, [])

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
      <Categories categories={categories} activeCategory={activeCategory} setCategory={setActiveCategory}/>
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
