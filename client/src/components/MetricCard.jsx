import React from "react";

function MetricCard() {
  return (
    <div class="stats shadow-md shadow-green-400 bg-neutral-800">
      <div class="stat border-r border-green-400">
        <div class="stat-title text-neutral-300">Current Stock Price</div>
        <div class="stat-value text-white">31K</div>
      </div>

      <div class="stat">
        <div class="stat-figure badge badge-soft badge-error">Error</div>
        <div class="stat-title text-neutral-300">Current DCF-Value</div>
        <div class="stat-value text-white">4,200</div>
      </div>

      <div class="stat">
        <div class="stat-figure badge badge-soft badge-success ">Success</div>
        <div class="stat-title text-neutral-300">
          Price-to-Earnings Ratio (P/E)
        </div>
        <div class="stat-value text-white">1,200</div>
      </div>

      <div class="stat">
        <div class="stat-figure badge badge-soft badge-warning">Warning</div>
        <div class="stat-title text-neutral-300">Price-to-Book Ratio (P/B)</div>
        <div class="stat-value text-white">1,200</div>
      </div>

      <div class="stat">
        <div class="stat-figure badge badge-soft badge-warning">Warning</div>
        <div class="stat-title text-neutral-300">
          Debt-to-Equity Ratio (D/E)
        </div>
        <div class="stat-value text-white">1,200</div>
      </div>
    </div>
  );
}

export default MetricCard;
