import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../types";

import BannerListWithSkeleton from "../bannersList/BannerList";

import styles from "./styles.module.css";

function LatestNews() {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannerListWithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
