import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

import NewsBanner from "../../components/newsBanner/NewsBanner";
import NewsList from "../../components/newsList/NewsList";
import Skeleton from "../../components/skeleton/Skeleton";

import styles from "./styles.module.css";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton type="banner" />}
      {!isLoading ? <NewsList items={news} /> : <Skeleton type="item" count={10} />}
    </main>
  );
}

export default Main;
