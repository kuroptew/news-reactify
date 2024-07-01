import Image from "../imageBanner/Image";
import {formatTimeAgo} from "../../helpers/formatTimeAgo";

import styles from "./styles.module.css";

function NewsBanner({ item }) {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h2 className={styles.title}>{item.title}</h2>
      <span className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</span>
    </div>
  );
}

export default NewsBanner;
