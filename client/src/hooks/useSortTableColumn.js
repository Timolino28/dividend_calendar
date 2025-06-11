import { useState, useCallback } from "react";

export const useSortTableColumn = () => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleSort = useCallback(
    (field) => {
      if (sortField === field) {
        setSortOrder((prev) => {
          if (prev === "asc") return "desc";
          if (prev === "desc") {
            setSortField(null);
            return null;
          }
          return "asc";
        });
      } else {
        setSortField(field);
        setSortOrder("asc");
      }
    },
    [sortField]
  );

  const getSortedData = useCallback(
    (data) => {
      if (!sortField || !sortOrder) return data;

      return [...data].sort((a, b) => {
        let aVal = a[sortField];
        let bVal = b[sortField];

        if (sortField.toLowerCase().includes("date")) {
          aVal = new Date(aVal);
          bVal = new Date(bVal);
        }

        //Fallback auf 0, wenn Wert undefined/null ist
        aVal = aVal ?? 0;
        bVal = bVal ?? 0;

        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      });
    },
    [sortField, sortOrder]
  );

  return { sortField, sortOrder, handleSort, getSortedData };
};
