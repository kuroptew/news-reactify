import { useState } from "react";

export function usePagination(totalPages) {
  const [pageNumber, setPageNumber] = useState(1);

  function handleNextPage() {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function handlePrevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function handleClickPage(numberPage) {
    setPageNumber(numberPage);
  }

  return { pageNumber, handleClickPage, handleNextPage, handlePrevPage };
}
