import { useTheme } from "../../context/ThemeContext";
import { IPaginationProps } from "../../types";

import styles from "./styles.module.css";



function Pagination({ currentPage, totalPages, handleNextPage, handlePrevPage, handleClickPage }: IPaginationProps) {
  const { isDark } =useTheme();

  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button className={styles.arrow} onClick={handlePrevPage} disabled={currentPage === 1}>
        {"<"}
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={styles.pageNumber}
          disabled={currentPage === index + 1}
          onClick={() => handleClickPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button className={styles.arrow} onClick={handleNextPage} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
