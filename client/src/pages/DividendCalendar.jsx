import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import StockDetails from "../components/StockDetails";
import { fetchCalendarData } from "../services/calendarService";
import { fetchStockData } from "../services/stockService";
import { useSortTableColumn } from "../hooks/useSortTableColumn";

function DividendCalendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const { sortField, sortOrder, handleSort, getSortedData } =
    useSortTableColumn();

  const loadData = async () => {
    const all = await fetchCalendarData();
    setCalendarData(all);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleViewDetails = async (symbol) => {
    try {
      const details = await fetchStockData(symbol);
      setSelectedStock(details);
      setIsCardOpen(true);
    } catch (error) {
      console.error("Fehler beim Laden der Stock-Details", error);
    }
  };

  const sortedData = getSortedData(calendarData);

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
        onClose={() => setIsCardOpen(false)}
      />
    </>
  );
}

export default DividendCalendar;
