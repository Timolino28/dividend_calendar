import React, { useState } from "react";
import dividendImage from "../../assets/dividend_calendar.png";
import valuationImage from "../../assets/valuation_check.png";
import dividendVideo from "../../assets/dividend_calendar_video.mov";
import valuationVideo from "../../assets/valuation_check_video.mov";

const features = [
  {
    id: 1,
    title: "Dividend Calendar",
    description:
      "Track upcoming dividends for your favorite stocks in one place.",
    video: dividendVideo,
  },
  {
    id: 2,
    title: "Valuation Check",
    description: "Instantly analyze a stock's valuation with key metrics.",
    video: valuationVideo,
  },
];

function FeatureTabs() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto pb-16 pt-5 px-4 gap-10">
      {/* Left side - Tabs */}
      <div className="flex md:flex-col md:gap-4 gap-2">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
            className={`text-left mx-0 md:mx-0 p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
              selectedFeature.id === feature.id
                ? "bg-neutral-800 text-green-400 font-bold border-green-500"
                : "bg-neutral-100 text-neutral-800 border-neutral-700 hover:border-green-400"
            }`}
          >
            <h3 className="md:text-xl mb-2">{feature.title}</h3>
            <p className="hidden md:block md:text-md text-sm font-medium">
              {feature.description}
            </p>
          </button>
        ))}
      </div>

      {/* Right side - Image */}
      <div className="w-full bg-white rounded-lg sticky top-24 h-fit">
        <div className="rounded-lg mx-0 overflow-hidden shadow-lg border border-green-200">
          {" "}
          <video
            src={selectedFeature.video}
            autoPlay
            loop
            muted
            playsInline
            alt={selectedFeature.title}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureTabs;
