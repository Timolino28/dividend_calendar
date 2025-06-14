import React from "react";
import MetricCard from "../components/MetricCard";

function ValuationCheckPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-xl">
          Check how the stock of your interest is currently valued
        </h1>
        <p className="mt-3 text-center">
          Each 4 metrics give key insights into the current valuation - with our
          scoring system, <br />
          you can see if there are signs of undervaluation and therefore
          investment opportunity.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <MetricCard label="DCF Fair Value" value="$147.00" status="✅" />
        <MetricCard label="P/E Ratio" value="22.1" status="⚠️" />
        <MetricCard label="P/B Ratio" value="3.5" status="❌" />
        <MetricCard label="Debt/Equity" value="0.8" status="✅" />
      </div>
    </>
  );
}

export default ValuationCheckPage;
