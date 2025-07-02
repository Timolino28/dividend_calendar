import React from "react";
import FeatureTabs from "./FeatureTabs";

const dividendCalendar = [
  "View upcoming dividend payments at a glance",
  "Includes key dates: Ex-Date, Payment Date, and Dividend Yield",
  "Perfect for income-focused investors and dividend strategies",
  "Helps you plan buy-ins around dividend timelines",
  "Powered by real-time data updates",
];

const valuationFeatures = [
  "Analyze stocks using a Value Investing approach",
  "Core metric: Discounted Cash Flow (DCF) valuation",
  "Supported by key financial ratios:",
  "Price-to-Earnings Ratio (P/E)",
  "Price-to-Book Ratio (P/B)",
  "Debt-to-Equity Ratio (D/E)",
  "Instantly see if a stock is undervalued, overvalued, or fairly valued",
];

function Features() {
  return (
    <div className="bg-neutral-100 py-10" id="features">
      <div className="flex flex-col items-center max-w-5xl mx-auto pt-10 px-8">
        <div className="badge badge-soft bg-green-100 text-green-400 font-semibold border-green-400 mb-3">
          Our Solution
        </div>
        <h1 className="text-5xl font-bold text-neutral-800 text-center">
          Welcome to the <br />
          <span className="uppercase italic tracking-wide leading-[1.5] text-neutral-800 font-black relative z-10 inline-block fancy-highlight">
            Zero Yield Club
          </span>
        </h1>
        <p className="text-neutral-600 text-2xl text-center mt-3 mb-10">
          Two features. Zero fluff.{" "}
        </p>
      </div>
      <FeatureTabs />
    </div>
  );
}

export default Features;
