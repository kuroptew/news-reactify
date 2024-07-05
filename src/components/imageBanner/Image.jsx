import styles from "./styles.module.css";

function Image({ image }) {
  return (
    <div className={styles.wrapper}>{image ? <img className={styles.image} alt="Banner img" src={image} /> : null}</div>
  );
}

export default Image;
