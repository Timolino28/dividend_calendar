import React from "react";
import MetricCard from "../components/MetricCard";

function ValuationCheckPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-400 tracking-tight">
          Check how the stock of your interest is currently valued
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
          Each 4 metrics give key insights into the current valuation - with our
          scoring system, <br />
          you can see if there are signs of undervaluation and therefore
          investment opportunity.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <MetricCard />
      </div>
    </>
  );
}

export default ValuationCheckPage;
