import React from "react";

function MetricCard({ label, value, status }) {
  const color =
    status === "✅"
      ? "text-green-500"
      : status === "⚠️"
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div className="p-4 border rounded shadow-sm bg-neutral-100">
      <h4 className="text-sm font-bold text-neutral-700">{label}</h4>
      <p className="text-lg font-mono text-neutral-800">{value}</p>
      <p className={`text-xl font-bold ${color}`}>{status}</p>
    </div>
  );
}

export default MetricCard;
