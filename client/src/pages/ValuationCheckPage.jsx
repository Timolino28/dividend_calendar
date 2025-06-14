import React from "react";
import MetricCard from "../components/MetricCard";

function ValuationCheckPage() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <MetricCard label="DCF Fair Value" value="$147.00" status="✅" />
      <MetricCard label="P/E Ratio" value="22.1" status="⚠️" />
      <MetricCard label="P/B Ratio" value="3.5" status="❌" />
      <MetricCard label="Debt/Equity" value="0.8" status="✅" />
    </div>
  );
}

export default ValuationCheckPage;
