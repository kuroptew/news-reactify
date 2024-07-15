import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../..";
import Image from "@/shared/ui/Image/Image";

import styles from "./styles.module.css";

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <h2>{item.title}</h2>
        <p>
          {item.description} ({item.language}){" "}
        </p>
        <button className={styles.btn}>
          <a target="_blank" href={item.url}>
            Original source
          </a>
        </button>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => {
            return <button className={styles.active}>{category}</button>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;