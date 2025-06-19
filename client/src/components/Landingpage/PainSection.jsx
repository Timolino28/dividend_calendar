import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const painPoints = [
  "Reading Wall Street Journal, CNBC ",
  "Watching YouTube-Videos of Wannabe-Buffets",
  "Getting through data on Yahoo Finance",
  "Forcing ChatGPT to be your Finance Concierge",
  "Resisting to hop on the Crypto-Frenzy",
];

function PainSection() {
  return (
    <div className="bg-neutral-800 pt-10">
      <div className="max-w-5xl mx-auto flex items-center py-10 px-8">
        <h1 className="text-3xl/10 font-medium text-white">
          We know the{" "}
          <span className="uppercase italic underline font-bold text-red-400">
            struggle
          </span>{" "}
          to find the next investment opportunity
        </h1>
        <div>
          <div className="min-w-sm py-5 ml-4 bg-neutral-800 rounded-md border-2 border-red-400">
            <h1 className="text-xl font-semibold text-white pl-4 mb-2">
              Hours of:
            </h1>
            {painPoints.map((points) => (
              <ul className="p-4">
                <li className="text-red-400 flex items-center uppercase">
                  {" "}
                  <IoMdCloseCircle className="mr-2" />
                  {points}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainSection;
