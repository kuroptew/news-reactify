import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import Image from "@/shared/ui/Image/Image";
import { SkeletonType } from "@/shared/interfaces";
import { INews } from "../../model/types";

import styles from "./styles.module.css";

interface Props {
  item: INews;
  type: SkeletonType;
}

export const NewsCard = ({item, type}: Props) => {
  return (
    <li className={`${styles.card} ${type === "banner" && styles.banner}`}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
}
