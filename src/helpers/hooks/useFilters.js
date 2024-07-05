import { useState } from "react";

export function useFilters(initialValue) {
  const [filters, setFilters] = useState(initialValue);

  function changeFilter(key, value) {
    setFilters((currentFilters) => {
      return { ...currentFilters, [key]: value };
    });
  }

  return { filters, changeFilter };
}
