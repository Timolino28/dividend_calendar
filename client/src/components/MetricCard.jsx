import React from "react";
import {
  getDCFScore,
  getPEScore,
  getPBScore,
  getDEScore,
} from "../utils/getValuationScores";
import { getOverallValuationScore } from "../utils/getOverallValuationScore";
import UndervaluedBadge from "../components/UndervaluedBadge";
import OvervaluedBadge from "../components/OvervaluedBadge";
import NeutralBadge from "../components/NeutralBadge";

function renderBadge(score) {
  if (score === "undervalued") return <UndervaluedBadge />;
  if (score === "overvalued") return <OvervaluedBadge />;
  if (score === "neutral") return <NeutralBadge />;
  return null;
}

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

  //Einzelbewertungen
  const dcfScore = getDCFScore(data?.dcf, data?.stockPrice);
  const peScore = getPEScore(data?.priceToEarningsRatio);
  const pbScore = getPBScore(data?.priceToBookRatio);
  const deScore = getDEScore(data?.debtToEquityRatio);

  //Gesamtergebnis berechnen
  const overallRating = getOverallValuationScore([
    dcfScore,
    peScore,
    pbScore,
    deScore,
  ]);

  return (
    <>
      <div class="stats shadow-md shadow-green-400 bg-neutral-800">
        <div class="stat border-r border-green-400">
          <div class="stat-title text-neutral-300">Current Stock Price</div>
          <div class="stat-value text-white">
            {data.stockPrice != null ? data.stockPrice : "N/A"}
          </div>
        </div>

        <div class="stat">
          <div class="stat-figure">
            {renderBadge(getDCFScore(data?.dcf, data?.stockPrice))}
          </div>
          <div class="stat-title text-neutral-300">Current DCF-Value</div>
          <div class="stat-value text-white">
            {data.dcf != null ? data.dcf : "N/A"}
          </div>
        </div>

        <div class="stat">
          <div class="stat-figure">
            {renderBadge(getPEScore(data?.priceToEarningsRatio))}
          </div>
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
          <div class="stat-figure">
            {renderBadge(getPBScore(data?.priceToBookRatio))}
          </div>
          <div class="stat-title text-neutral-300">
            Price-to-Book Ratio (P/B)
          </div>
          <div class="stat-value text-white">
            {data.priceToBookRatio != null ? data.priceToBookRatio : "N/A"}
          </div>
        </div>

        <div class="stat">
          <div class="stat-figure">
            {renderBadge(getDEScore(data?.debtToEquityRatio))}
          </div>
          <div class="stat-title text-neutral-300">
            Debt-to-Equity Ratio (D/E)
          </div>
          <div class="stat-value text-white">
            {data.debtToEquityRatio != null ? data.debtToEquityRatio : "N/A"}
          </div>
        </div>
      </div>
      {overallRating && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-green-400">
            Valuation Summary
          </h3>
          <p className="mt-5 text-neutral-800 text-6xl font-bold">
            {overallRating}
          </p>
        </div>
      )}
    </>
  );
}

export default MetricCard;
