import { useRef, cloneElement } from "react";

import styles from "./styles.module.css";

function Slider({ children, step = 150 }) {
  const sliderRef = useRef(null);

  function scrollLeft() {
    sliderRef.current.scrollLeft -= step;
  }

  function scrollRight() {
    sliderRef.current.scrollLeft += step;
  }

  return (
    <div className={styles.slider}>
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
