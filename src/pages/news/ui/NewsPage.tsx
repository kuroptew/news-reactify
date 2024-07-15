import { useAppSelector } from "@/app/appStore";
import { Link } from "react-router-dom";
import { NewsDetails } from "@/entities/news";

import styles from "./styles.module.css";

const NewsPage = () => {
  const currentNews = useAppSelector((state) => state.news.currentNews);

  if (!currentNews) {
    return (
      <div>
        <h2>Cannot find news</h2>
        <Link to={"/"}>
          <h3>Go to main page</h3>
        </Link>
      </div>
    );
  }
  return (
    <main className={styles.news}>
      <NewsDetails item={currentNews} />
    </main>
  );
};

export default NewsPage;