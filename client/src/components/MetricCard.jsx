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
import { MdInfoOutline } from "react-icons/md";

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
      <div class="stats shadow-md shadow-green-400 bg-neutral-800 overflow-visible">
        <div class="stat min-w-55 flex flex-col">
          <div class="stat-title text-neutral-300">Current Stock Price</div>
          <div class="stat-value text-white">
            {data.stockPrice != null ? data.stockPrice.toFixed(2) : "N/A"}
          </div>
        </div>

        {/*DCF-Container*/}
        <div class="stat min-w-55 flex flex-col">
          <div class="stat-title text-neutral-300">
            {" "}
            <div
              className="tooltip tooltip-success flex"
              data-tip="The DCF model estimates the present value of a company based on its expected future cash flows, discounted back to today using a required rate of return and therfore determines the intrinsic value of a stock."
            >
              Current DCF-Value
              <MdInfoOutline />
            </div>
          </div>
          <div class="stat-value text-white">
            {data.dcf != null ? data.dcf : "N/A"}
          </div>
          <div class="stat-figure mt-2 self-start">
            {renderBadge(getDCFScore(data?.dcf, data?.stockPrice))}
          </div>
        </div>

        {/*Price-to-Earnings-Container*/}
        <div class="stat min-w-55 flex flex-col">
          <div class="stat-title text-neutral-300">
            <div
              className="tooltip tooltip-success flex"
              data-tip="The P/E ratio compares a company’s current share price to its earnings per share (EPS)
 and therfore indicates how much investors are willing to pay for each unit of earnings."
            >
              Price-to-Earnings Ratio (P/E)
              <MdInfoOutline />
            </div>
          </div>
          <div class="stat-value text-white">
            {data.priceToEarningsRatio != null
              ? data.priceToEarningsRatio
              : "N/A"}
          </div>
          <div class="stat-figure mt-2 self-start">
            {renderBadge(getPEScore(data?.priceToEarningsRatio))}
          </div>
        </div>

        {/*Price-to-Book-Container*/}
        <div class="stat min-w-55 flex flex-col">
          <div class="stat-title text-neutral-300">
            <div
              className="tooltip tooltip-success flex"
              data-tip="The P/B ratio compares a company’s market value to its book value and therfore reflects how the market values a company's net assets.
"
            >
              Price-to-Book Ratio (P/B)
              <MdInfoOutline />
            </div>
          </div>
          <div class="stat-value text-white">
            {data.priceToBookRatio != null ? data.priceToBookRatio : "N/A"}
          </div>
          <div class="stat-figure mt-2 self-start">
            {renderBadge(getPBScore(data?.priceToBookRatio))}
          </div>
        </div>

        {/*Debt-to-Equity-Container*/}
        <div class="stat min-w-55 flex flex-col">
          <div class="stat-title text-neutral-300">
            <div
              className="tooltip tooltip-success flex"
              data-tip="The D/E ratio measures a company’s financial leverage by comparing total debt to shareholder equity and therfore shows how much a company relies on debt to finance its assets.
"
            >
              Debt-to-Equity Ratio (D/E)
              <MdInfoOutline />
            </div>
          </div>
          <div class="stat-value text-white">
            {data.debtToEquityRatio != null ? data.debtToEquityRatio : "N/A"}
          </div>
          <div class="stat-figure mt-2 self-start">
            {renderBadge(getDEScore(data?.debtToEquityRatio))}
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
