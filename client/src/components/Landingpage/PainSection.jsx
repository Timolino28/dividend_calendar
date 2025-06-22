import React from "react";
import { FaRegNewspaper, FaYoutube, FaChartBar, FaRobot } from "react-icons/fa";

const painPoints = [
  {
    headline: "Information Overload",
    content:
      "Reading endless articles on Wall Street Journal, CNBC, and still not getting clear insights.",
    icon: <FaRegNewspaper size={40} />,
  },
  {
    headline: "Bad Advice Everywhere",
    content:
      "Watching YouTube videos from self-proclaimed investing gurus with no real track record.",
    icon: <FaYoutube size={40} />,
  },
  {
    headline: "Data Fatigue",
    content:
      "Digging through messy tables on Yahoo Finance just to understand basic valuation metrics.",
    icon: <FaChartBar size={40} />,
  },
  {
    headline: "AI Overkill",
    content:
      "Forcing ChatGPT to act like your personal finance analyst instead of using purpose-built tools.",
    icon: <FaRobot size={40} />,
  },
];

function PainSection() {
  return (
    <div className="bg-neutral-800 py-20">
      <div className="max-w-5xl flex">
        <div className="mx-auto items-center py-10 px-8">
          <h1 className="text-4xl/10 font-medium text-white">
            We know the{" "}
            <span className="uppercase italic underline font-bold text-red-400">
              struggle
            </span>{" "}
          </h1>
          <h2 className="text-2xl my-5 font-medium text-neutral-200">
            Finding new stocks to invest can be tough <br />
            Hours of:
          </h2>
          <div>
            <div className="flex flex-col gap-8 min-w-sm py-5 bg-neutral-800 ">
              {painPoints.map((points) => (
                <div className="card bg-neutral-700 w-110 text-neutral-content border-1 border-neutral-500">
                  <div className="card-body">
                    <div className="flex">
                      <div className="mr-4 text-neutral-300">{points.icon}</div>
                      <div>
                        <h2 className="card-title text-xl text-red-400">
                          {points.headline}
                        </h2>
                        <p className="text-red-200 text-[16px]">
                          {points.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-2xl flex items-center justify-center py-10 px-8 bg-green-400 rounded-md"></div>
      </div>
    </div>
  );
}

export default PainSection;
