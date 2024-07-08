import { DirectionType, SkeletonType } from "../../types";
import styles from "./styles.module.css";

interface Props {
  type?: SkeletonType;
  count?: number;
  direction?: DirectionType;
}

function Skeleton({ count = 1, type = "banner", direction = "column" }: Props) {
  if (count === 1) {
    return <div className={type === "banner" ? styles.banner : styles.item}></div>;
  }

  if (count > 1) {
    return (
      <ul className={direction === "column" ? styles.columnList : styles.rowList}>
        {[...Array(count)].map((_, index) => (
          <li key={index} className={type === "banner" ? styles.banner : styles.item}></li>
        ))}
      </ul>
    );
  }
}

export default Skeleton;
