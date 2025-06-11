import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Table({ data, sortField, sortOrder, onSort, onViewDetails }) {
  const formatDecimal = (value) => {
    if (typeof value !== "number") return "-";
    return value.toFixed(2);
  };

  //Symbol bei Klick an API übergeben

  return (
    <div className="my-5 overflow-x-auto max-w-6xl mx-auto rounded-box border bg-neutral-800">
      <table className="table">
        <thead className="text-green-400">
          <tr>
            <th>#</th>
            <th>Symbol</th>
            <th>Date</th>
            <th>Dividend</th>
            <th
              className="cursor-pointer select-none"
              onClick={() => onSort("yield")}
            >
              <span className="inline-flex items-center gap-1">
                Yield
                {sortField === "yield" &&
                  (sortOrder === "asc" ? <FaChevronDown /> : <FaChevronUp />)}
              </span>
            </th>
            <th
              className="cursor-pointer select-none"
              onClick={() => onSort("paymentDate")}
            >
              <span className="inline-flex items-center gap-1">
                Payment Date{" "}
                {sortField === "paymentDate" &&
                  (sortOrder === "asc" ? <FaChevronDown /> : <FaChevronUp />)}
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          {data.map((data, index) => (
            <tr key={data.symbol}>
              <th>{index + 1}</th>
              <td>{data.symbol}</td>
              <td>{data.date}</td>
              <td>${formatDecimal(data.dividend)}</td>
              <td>{formatDecimal(data.yield)} %</td>
              <td>{data.paymentDate}</td>
              <td>
                <button
                  className="btn btn-sm"
                  onClick={() => onViewDetails(data.symbol)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
