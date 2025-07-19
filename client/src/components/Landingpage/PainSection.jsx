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
    <div className="bg-neutral-100 pb-10 md:pt-0">
      <div className="w-full max-w-[1450px] mx-auto bg-neutral-900 flex flex-col md:flex-row items-center py-10 px-4 md:px-10 rounded-lg">
        {" "}
        <div className="w-full max-w-[425px] mx-auto py-10 px-5 md:px-0">
          <h1 className="md:text-4xl/10 text-3xl font-semibold text-red-400 md:mb-5 mb-2">
            The stock hunt shouldn't break your brain.
          </h1>
          <h2 className="md:text-2xl text-[18px] mb-8 font-light text-neutral-200">
            But between gurus, graphs, and guesswork — <br /> it kinda does.
          </h2>

          <div>
            <div className="flex flex-col gap-8 py-2 bg-neutral-900">
              {painPoints.map((points) => (
                <div className="card bg-neutral-800 w-full max-w-[425px] mx-auto text-neutral-content border border-neutral-500">
                  {" "}
                  <div className="card-body">
                    <div className="flex md:flex-row flex-col">
                      <div className="mr-4 mb-2 md:mb-0 text-neutral-300">
                        {points.icon}
                      </div>
                      <div>
                        <h2 className="card-title md:text-xl text-red-400 mb-2">
                          {points.headline}
                        </h2>
                        <p className="text-red-200 md:text-[16px]">
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
        <div className="flex flex-col items-center justify-center text-center mx-auto mt-5 md:mt-0">
          <h2 className="md:text-4xl text-2xl font-bold text-green-400">
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
