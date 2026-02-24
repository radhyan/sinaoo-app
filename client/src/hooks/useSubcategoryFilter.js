import { useState, useMemo, useEffect } from "react";

export function useSubcategoryFilter(items, dependency = null) {
  const [selectedSubcategory, setSelectedSubcategory] = useState("Semua");

  const subcategories = useMemo(() => {
    if (!items || !items.length) return [];
    const subs = items.map((item) => item.subcategory).filter(Boolean);
    const uniqueSubs = [...new Set(subs)];
    return uniqueSubs.length > 0 ? ["Semua", ...uniqueSubs] : [];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (selectedSubcategory === "Semua") return items;
    return items.filter((item) => item.subcategory === selectedSubcategory);
  }, [items, selectedSubcategory]);

  useEffect(() => {
    setSelectedSubcategory("Semua");
  }, [dependency]);

  return {
    selectedSubcategory,
    setSelectedSubcategory,
    subcategories,
    filteredItems,
  };
}
