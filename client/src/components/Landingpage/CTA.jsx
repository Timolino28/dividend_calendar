import React, { useState } from "react";
import JoinWaitingList from "./JoinWaitingList";

function CTA({ onSuccess }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-neutral-100 pt-20" id="cta">
      <div className="bg-green-400 flex flex-col md:flex-row justify-between items-center md:px-40 max-w-[1450px] mx-auto py-20 rounded-lg">
        {/* Left Container */}
        <div className="text-center">
          <h1 className="text-neutral-800 font-base text-3xl md:text-5xl/14">
            Ready to trade your <br />
            <span className="font-4xl font-bold text-neutral-700 opacity-50 blur-[2px]">
              4-hour research
            </span>{" "}
            <br /> rabbit holes for <br />
            <span className="font-4xl font-bold text-neutral-100">
              {" "}
              4-second insights
            </span>
            ?
          </h1>
        </div>

        {/* Pricing Card */}
        <div className="md:mx-auto mt-10 md:mt-0">
          <div className="card md:min-w-96 w-78 bg-neutral-800 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-soft badge-success">
                Early Access
              </span>
              <div className="flex justify-between">
                <h2 className="md:text-3xl text-2xl text-neutral-100 font-bold">
                  Starter
                </h2>
                <span className="md:text-xl text-[18px] font-bold text-green-300">
                  $15/mo*
                </span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs text-neutral-300">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base">
                    Unlimited access to dividend calendar
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base">
                    Get more details about the dividend stocks
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base">
                    Unlimited requests for the valuation check
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base">More features to come</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-lg text-green-300 font-bold md:pt-8 pt-4 pb-3">
                  Launching soon:
                </p>
                <button
                  className="btn bg-neutral-100 hover:bg-green-400 w-full"
                  onClick={() => setShowModal(true)}
                >
                  Join the waiting list
                </button>
                <p className="pt-3 text-xs text-neutral-400">
                  *Price will increase after launch
                </p>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <JoinWaitingList
            onClose={() => setShowModal(false)}
            onSuccess={onSuccess}
          />
        )}
      </div>
    </div>
  );
}

export default CTA;
