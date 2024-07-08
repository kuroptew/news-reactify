import { useState } from "react";
import { IFilters } from "../../types";

export function useFilters(initialValue: IFilters) {
  const [filters, setFilters] = useState(initialValue);

  function changeFilter(key: string, value: string | null) {
    setFilters((currentFilters) => {
      return { ...currentFilters, [key]: value };
    });
  }

  return { filters, changeFilter };
}
