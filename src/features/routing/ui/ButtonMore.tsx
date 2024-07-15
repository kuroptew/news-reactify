import { ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const ButtonMore = ({children, onClick }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonMore;
