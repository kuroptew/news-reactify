import { newsApi } from "../../store/services/newsApi";

import BannerListWithSkeleton from "../bannersList/BannerList";

import styles from "./styles.module.css";

function LatestNews() {
  const { data, isLoading} = newsApi.useGetLatestNewsQuery(null)

  return (
    <section className={styles.section}>
      <BannerListWithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
