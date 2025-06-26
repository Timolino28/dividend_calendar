import React from "react";

function CTA() {
  return (
    <div className="bg-green-400 py-20">
      <div className="flex max-w-[960px] mx-auto py-10 px-8">
        {/* Left Container */}
        <div>
          <h1 className="text-neutral-800 font-medium text-4xl">
            Ready to trade your 4-hour research rabbit holes for 4-second
            insights?
          </h1>
        </div>

        {/* Pricing Card */}
        <div className="card min-w-96 bg-neutral-800 shadow-sm">
          <div className="card-body">
            <span className="badge badge-xs badge-soft badge-success">
              Early Access
            </span>
            <div className="flex justify-between">
              <h2 className="text-3xl text-neutral-100 font-bold">Starter</h2>
              <span className="text-xl font-bold text-green-300">$10/mo*</span>
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
              <p className="text-lg text-green-300 font-bold pt-8 pb-3">
                Launching soon:
              </p>
              <button className="btn bg-neutral-100 hover:bg-green-400 w-full">
                Join the waiting list
              </button>
              <p className="pt-3 text-xs text-neutral-400">
                *price may increase after launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
