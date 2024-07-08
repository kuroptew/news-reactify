import { useState } from "react";

export function usePagination(totalPages: number) {
  const [page_number, setPageNumber] = useState(1);

  function handleNextPage() {
    if (page_number < totalPages) {
      setPageNumber(page_number + 1);
    }
  }

  function handlePrevPage() {
    if (page_number > 1) {
      setPageNumber(page_number - 1);
    }
  }

  function handleClickPage(numberPage: number) {
    setPageNumber(numberPage);
  }

  return { page_number, handleClickPage, handleNextPage, handlePrevPage };
}
