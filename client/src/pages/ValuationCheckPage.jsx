import React, { useState } from "react";
import MetricCard from "../components/MetricCard";
import { fetchValuationData } from "../services/valuationService";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/SearchBar";

function ValuationCheckPage() {
  const [inputValue, setInputValue] = useState("");
  const [symbol, setSymbol] = useState(null);

  const handleSubmit = () => {
    setSymbol(inputValue);
    setInputValue("");
    console.log(symbol);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["valuation", symbol],
    queryFn: () => fetchValuationData(symbol),
    enabled: !!symbol, //erst ausführen, wenn Symbol gesetzt ist
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-neutral-800 tracking-tight">
          Check how the stock of your interest is currently valued
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-500 leading-relaxed">
          Each 4 metrics give key insights into the current valuation - with our
          scoring system, <br />
          you can see if there are signs of undervaluation and therefore
          investment opportunity.
        </p>
        <div className="mt-5">
          <SearchBar
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="my-5 text-2xl font-semibold text-green-400">
          {data?.companyName ?? ""}
        </h1>
        {data && (
          <>
            <p className="text-[18px] font-semibold">{`Date of data: ${
              data?.date ?? ""
            }`}</p>
            <p className="mb-5">{`Period: ${data?.period ?? ""}`}</p>
          </>
        )}

        <MetricCard data={data} isLoading={isLoading} isError={isError} />
      </div>
    </>
  );
}

export default ValuationCheckPage;
