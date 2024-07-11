import { INews, NewsCard } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import { DirectionType, SkeletonType } from "@/shared/interfaces";

import styles from "./styles.module.css";

interface Props {
  news?: INews[];
  type?: SkeletonType;
  direction?: DirectionType;
}

const NewsList = ({ news, type = "item"}: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
