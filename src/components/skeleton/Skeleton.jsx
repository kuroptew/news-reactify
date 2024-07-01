import styles from "./styles.module.css";

function Skeleton({ count = 1, type = "banner" }) {
  if (type === "banner") {
    return <div className={styles.banner}></div>;
  }

  if (count > 1 && type === "item") {
    return (
      <ul className={styles.list}>
        {[...Array(count)].map((_, index) => (
          <li key={index} className={styles.item}></li>
        ))}
      </ul>
    );
  }
}

export default Skeleton;
