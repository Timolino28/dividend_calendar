import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import JoinWaitingList from "./JoinWaitingList";

function Hero({ onSuccess }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-neutral-100 h-[100vh]">
      {/* Hero-Inhalte */}
      <div className="flex flex-col justify-center items-center min-h-[720px] text-center">
        <div className="max-w-3xl h-1/2">
          <div
            className="cursor-pointer badge badge-soft bg-neutral-200 border border-neutral-400 mb-3 font-semibold"
            onClick={() => setShowModal(true)}
          >
            Join the waiting list now!
          </div>
          <h1 className="text-7xl text-neutral-800 font-bold font-roboto">
            New stock opportunites in
            <br />
            <span className="mt-6 uppercase italic tracking-wide leading-[1.5] text-7xl text-neutral-800 font-black relative z-10 inline-block fancy-highlight">
              Seconds
            </span>
          </h1>

          <p className="text-neutral-600 text-2xl py-10">
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
          <div className="flex gap-4 mt-5">
            <div className="transition-all duration-300 flex-1 bg-neutral-200 border border-neutral-300 rounded-md py-2 px-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl">💸</span>
                <p className="text-xl text-neutral-800 font-semibold my-2">
                  Always current data
                </p>
              </div>
            </div>

            <div className="transition-all duration-300 flex-1 bg-neutral-200 border border-neutral-300 rounded-md py-2 px-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl">🚀</span>
                <p className="text-xl text-neutral-800 font-semibold my-2">
                  7 day trial period
                </p>
              </div>
            </div>

            <div className="transition-all duration-300 flex-1 bg-neutral-200 border border-neutral-300 rounded-md py-2 px-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl">😍</span>
                <p className="text-xl text-neutral-800 font-semibold my-2">
                  Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <JoinWaitingList
            onClose={() => setShowModal(false)}
            onSuccess={onSuccess}
            variant="hero"
          />
        )}
      </div>
    </div>
  );
}

export default Hero;
