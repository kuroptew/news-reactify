import styles from "./styles.module.css";

interface Props {
  image: string;
}

function Image({ image }: Props) {
  return (
    <div className={styles.wrapper}>{image ? <img className={styles.image} alt="Banner img" src={image} /> : null}</div>
  );
}

export default Image;
