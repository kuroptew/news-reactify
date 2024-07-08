import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../types";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

function NewsItem({ item }: Props) {
  return (
    <li className={styles.item}>
      <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }}></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </span>
      </div>
    </li>
  );
}

export default NewsItem;
