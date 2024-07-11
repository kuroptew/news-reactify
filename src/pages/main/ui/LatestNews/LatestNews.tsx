import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news/ui";

import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList 
        type="banner"  
        isLoading={isLoading}
        direction="row" 
        news={data && data.news} 
      />
    </section>
  );
};

export default LatestNews;
