import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-neutral-100 min-h-200">
      <div className="hero-content mx-auto py-5 text-center">
        <div className="max-w-2xl mt-12">
          <h1 className="text-5xl text-neutral-800 font-black font-roboto">
            Finding & evaluating <br /> stocks in <br />
            <span className="mt-3 uppercase italic tracking-wide leading-[1.5] text-5xl text-neutral-800 relative inline-block fancy-highlight">
              Easy Mode
            </span>
          </h1>

          <p className="text-neutral-600 text-xl py-4 mb-5">
            Track payout dates with our{" "}
            <span className="font-semibold underline italic text-green-400">
              Dividend Calendar
            </span>{" "}
            and evaluate fair prices with our{" "}
            <span className="font-semibold underline italic text-green-400">
              Valuation Scoring System
            </span>
            . Data-driven, not drama-driven.
          </p>
          <button className="btn text-neutral-800 bg-green-400 border border-green-400 text-[16px] py-6 px-8">
            Let's Start
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
