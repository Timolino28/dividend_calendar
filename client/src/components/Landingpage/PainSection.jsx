import React from "react";
import { FaRegNewspaper, FaYoutube, FaChartBar, FaRobot } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi";

const painPoints = [
  {
    headline: "Drowning in Info",
    content:
      "You read 12 articles on CNBC, 3 Reddit threads, and somehow you're even more confused than before.",
    icon: <FaRegNewspaper size={40} />,
  },
  {
    headline: "Influencer Finance 101",
    content:
      "Some guy on YouTube in a Lambo told you to go all-in on Dogecoin. He sounds confident. And unlicensed.",
    icon: <FaYoutube size={40} />,
  },
  {
    headline: "ChatGPT, the Overworked Analyst",
    content:
      "You asked ChatGPT to build a full portfolio strategy. Twice. Still wondering if 'YOLO' is an official metric.",
    icon: <FaRobot size={40} />,
  },
];

function PainSection() {
  return (
    <div className="bg-neutral-100 pb-10">
      <div className="max-w-[1450px] bg-neutral-900 flex items-center mx-auto py-10 px-30 rounded-lg">
        <div className="px-8 py-10">
          <h1 className="text-4xl/10 font-semibold text-red-400 mb-2">
            The stock hunt shouldn't break <br /> your brain.
          </h1>
          <h2 className="text-2xl mb-8 font-light text-neutral-200">
            But between gurus, graphs, and guesswork — <br /> it kinda does.
          </h2>
          <div>
            <div className="flex flex-col gap-8 min-w-sm py-2 bg-neutral-900 ">
              {painPoints.map((points) => (
                <div className="card bg-neutral-800 w-110 text-neutral-content border-1 border-neutral-500">
                  <div className="card-body">
                    <div className="flex">
                      <div className="mr-4 text-neutral-300">{points.icon}</div>
                      <div>
                        <h2 className="card-title text-xl text-red-400 mb-2">
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
        <div className="flex flex-col items-center justify-center text-center mx-auto">
          <h2 className="text-4xl font-bold text-green-400">
            Escape the chaos of <br /> clueless investing
          </h2>

          <div className="mt-6 animate-bounce">
            <HiChevronDoubleDown size={36} className="text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainSection;
