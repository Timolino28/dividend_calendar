import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import StockDetails from "../components/StockDetails";
import { fetchCalendarData } from "../services/calendarService";
import { fetchStockData } from "../services/stockService";
import { useSortTableColumn } from "../hooks/useSortTableColumn";
import { useQuery } from "@tanstack/react-query";

function DividendCalendar() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const { sortField, sortOrder, handleSort, getSortedData } =
    useSortTableColumn();

  // ✅ Kalenderdaten via React Query
  const {
    data: calendarData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["calendar"],
    queryFn: fetchCalendarData,
    staleTime: 1000 * 60 * 5, // 5 Minuten Cache
  });

  // ✅ Einzelne Aktie via React Query (Detail)
  const {
    data: selectedStock,
    isLoading: isLoadingDetails,
    isError: isErrorDetails,
  } = useQuery({
    queryKey: ["stock", selectedSymbol],
    queryFn: () => fetchStockData(selectedSymbol),
    enabled: !!selectedSymbol, //nur wenn Symbol gesetzt
  });

  const sortedData = getSortedData(calendarData);

  const handleViewDetails = (symbol) => {
    setSelectedSymbol(symbol);
    setIsCardOpen(true);
  };

  if (isLoading)
    return <span className="loading loading-ring loading-xl"></span>;

  if (isError)
    return <p className="text-center text-red-500">Fehler beim Laden.</p>;

  return (
    <>
      <Table
        data={sortedData}
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={handleSort}
        onViewDetails={handleViewDetails}
      />
      <StockDetails
        isOpen={isCardOpen}
        stock={selectedStock}
        isLoading={isLoadingDetails}
        isError={isErrorDetails}
        onClose={() => setIsCardOpen(false)}
      />
    </>
  );
}

export default DividendCalendar;
