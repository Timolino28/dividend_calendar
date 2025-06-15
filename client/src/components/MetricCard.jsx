import React from "react";

function MetricCard({ data, isLoading, isError }) {
  if (isLoading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div class="stats shadow-md shadow-green-400 bg-neutral-800">
      <div class="stat border-r border-green-400">
        <div class="stat-title text-neutral-300">Current Stock Price</div>
        <div class="stat-value text-white">
          {data.stockPrice != null ? data.stockPrice : "N/A"}
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure badge badge-soft badge-error">Error</div>
        <div class="stat-title text-neutral-300">Current DCF-Value</div>
        <div class="stat-value text-white">
          {data.dcf != null ? data.dcf : "N/A"}
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure badge badge-soft badge-success ">Success</div>
        <div class="stat-title text-neutral-300">
          Price-to-Earnings Ratio (P/E)
        </div>
        <div class="stat-value text-white">
          {data.priceToEarningsRatio != null
            ? data.priceToEarningsRatio
            : "N/A"}
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure badge badge-soft badge-warning">Warning</div>
        <div class="stat-title text-neutral-300">Price-to-Book Ratio (P/B)</div>
        <div class="stat-value text-white">
          {data.priceToBookRatio != null ? data.priceToBookRatio : "N/A"}
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure badge badge-soft badge-warning">Warning</div>
        <div class="stat-title text-neutral-300">
          Debt-to-Equity Ratio (D/E)
        </div>
        <div class="stat-value text-white">
          {data.debtToEquityRatio != null ? data.debtToEquityRatio : "N/A"}
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
