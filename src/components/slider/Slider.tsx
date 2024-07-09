import { useRef, cloneElement, ReactElement } from "react";

import styles from "./styles.module.css";

interface Props {
  children: ReactElement;
  step?: number;
  isDark: boolean
}

function Slider({ children , step = 150, isDark } : Props) {
  const sliderRef = useRef<HTMLElement | null>(null);

  function scrollLeft() {
    if(!sliderRef.current) return
    sliderRef.current.scrollLeft -= step;
  }

  function scrollRight() {
    if(!sliderRef.current) return
    sliderRef.current.scrollLeft += step;
  }

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={scrollLeft} className={styles.arrow}>
        {"<"}
      </button>
      {cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
}

export default Slider;
