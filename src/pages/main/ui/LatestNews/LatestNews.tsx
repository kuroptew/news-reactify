import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news/ui";

import { INews } from "@/entities/news";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { ButtonMore } from "@/features/routing";

import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
    const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList 
        type="banner"  
        isLoading={isLoading}
        direction="row" 
        news={data && data.news}
        viewNewsSlot={(news: INews) => (
          <ButtonMore onClick={() => navigateTo(news)}>Read more</ButtonMore>
        )} 
      />
    </section>
  );
};

export default LatestNews;
