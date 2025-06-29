import React from "react";

function Hero() {
  return (
    <div className="bg-neutral-100 min-h-180">
      <div className="flex flex-col justify-center items-center min-h-[720px] text-center relative">
        <div className="max-w-3xl h-1/2">
          {/* Banner einfügen: Launching soon - join waiting list */}
          <h1 className="text-7xl text-neutral-800 font-bold font-roboto">
            Stock opportunites in
            <br />
            <span className="mt-6 uppercase italic tracking-wide leading-[1.5] text-7xl text-neutral-800 font-black relative z-10 inline-block fancy-highlight">
              Minutes
            </span>
          </h1>

          <p className="text-neutral-600 text-2xl py-10 mb-5">
            Track payout dates with our{" "}
            <span className="font-semibold italic text-green-400">
              Dividend Calendar
            </span>{" "}
            and evaluate fair prices with our{" "}
            <span className="font-semibold italic text-green-400">
              Valuation Scoring System
            </span>
            . Data-driven, not drama-driven.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
