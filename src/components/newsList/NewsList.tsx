import withSkeleton from "../../helpers/hocs/withSkeleton/withSkeleton";
import { INews } from "../../types";
import NewsItem from "../newsItem/NewsItem";

import styles from "./styles.module.css";

interface Props {
  items?: INews[];
}

function NewsList({ items } : Props) {
  return (
    <ul className={styles.list}>
      {items?.map((item) => (
        <NewsItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
