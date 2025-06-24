import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

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
    <div className="bg-neutral-100 py-20">
      <div className="flex flex-col items-center max-w-5xl mx-auto py-10 px-8">
        <div className="badge badge-soft bg-green-100 text-green-400 font-semibold border-green-400 mb-3">
          Our Solution
        </div>
        <h1 className="text-5xl font-bold text-neutral-800 text-center">
          Welcome to the{" "}
          <span className="text-green-400">Zero Yield Club!</span>
        </h1>
        <p className="text-neutral-600 text-2xl text-center mt-3 mb-10">
          Two features. Zero fluff.{" "}
        </p>
        <div className="flex gap-10">
          {/* Dividend Calendar */}
          <div className="bg-neutral-800 border-1 border-green-400 py-5 px-6 rounded-md flex-1 flex flex-col min-h-[350px] shadow-sm shadow-green-400">
            <h2 className="text-xl uppercase text-white font-bold mb-5">
              Dividend Calendar
            </h2>
            <ul className="space-y-3">
              {dividendCalendar.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-green-400 py-1"
                >
                  <FaRegCheckCircle className="mt-1 text-green-400 text-lg shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Valuation Check */}
          <div className="bg-neutral-800 border-1 border-green-400 py-5 px-6 rounded-md flex-1 flex flex-col min-h-[350px] shadow-sm shadow-green-400">
            <h2 className="text-xl uppercase text-white font-bold mb-5">
              Valuation Check
            </h2>
            <ul className="space-y-3">
              {valuationFeatures.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-2 text-green-400 py-1 ${
                    feature.includes("P/E") ||
                    feature.includes("P/B") ||
                    feature.includes("D/E")
                      ? "pl-6"
                      : ""
                  }`}
                >
                  <FaRegCheckCircle className="mt-1 text-green-400 text-lg shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
