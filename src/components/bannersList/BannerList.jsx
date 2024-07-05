import withSkeleton from "../../helpers/hocs/withSkeleton/withSkeleton";
import NewsBanner from "../newsBanner/NewsBanner";

import styles from "./styles.module.css";

function BannerList({ banners }) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}

const BannerListWithSkeleton = withSkeleton(BannerList, "banner", 10, "row");

export default BannerListWithSkeleton;
