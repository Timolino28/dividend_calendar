import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import StockDetails from "../components/StockDetails";
import { fetchCalendarData } from "../services/calendarService";
import { fetchStockData } from "../services/stockService";
import { fetchValuationData } from "../services/valuationService";
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

  // ✅ Einzelner DCF-Wert pro Aktie via React Query (Detail)
  const {
    data: selectedValuation,
    isLoading: isLoadingValuation,
    isError: isErrorValuation,
  } = useQuery({
    queryKey: ["valuation", selectedSymbol],
    queryFn: () => fetchValuationData(selectedSymbol),
    enabled: !!selectedSymbol, //nur wenn Symbol gesetzt
  });

  const sortedData = getSortedData(calendarData);

  const handleViewDetails = (symbol) => {
    setSelectedSymbol(symbol);
    setIsCardOpen(true);
  };

  if (isLoading)
    return (
      <>
        <div className="flex justify-center p-10">
          <span className="text-center loading loading-ring loading-xl"></span>
        </div>
      </>
    );

  if (isError)
    return (
      <div className="flex justify-center p-10 text-xl font-semibold text-red-400">
        Oops, something went wrong...
      </div>
    );

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-neutral-800 tracking-tight">
          See the latest dividend payments from the Big Guns
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-500 leading-relaxed">
          The "Yield" and "Payment Date" columns can be sorted
          ascending/descending
        </p>
      </div>
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
        valuation={selectedValuation}
        isLoading={(isLoadingDetails, isLoadingValuation)}
        isError={(isErrorDetails, isErrorValuation)}
        onClose={() => setIsCardOpen(false)}
      />
    </>
  );
}

export default DividendCalendar;
