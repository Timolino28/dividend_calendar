import React from "react";

function CTA() {
  return (
    <div className="bg-neutral-800 py-20">
      <div className="max-w-[960px] mx-auto py-10 px-8 rounded-md border-3 border-white">
        <h1 className="text-white font-medium text-6xl">
          Ready to get your Personal Portfolio to the{" "}
          <span className="uppercase font-bold text-green-400 italic">
            next level
          </span>
          ?
        </h1>
        <button className="btn mt-7">Bring It On!</button>
      </div>
    </div>
  );
}

export default CTA;
