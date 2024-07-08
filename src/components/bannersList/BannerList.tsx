import withSkeleton from "../../helpers/hocs/withSkeleton/withSkeleton";
import { INews } from "../../types";
import NewsBanner from "../newsBanner/NewsBanner";

import styles from "./styles.module.css";

interface Props {
  banners?: INews[] | null;
}

function BannerList({ banners }: Props) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}

const BannerListWithSkeleton = withSkeleton<Props>(BannerList, "banner", 10, "row");

export default  BannerListWithSkeleton;
