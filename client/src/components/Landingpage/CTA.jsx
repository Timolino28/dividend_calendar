import React from "react";

function CTA() {
  return (
    <div className="bg-neutral-100 py-40">
      <div className="max-w-[960px] mx-auto py-10 px-8 bg-green-400 rounded-md border-1 border-neutral-800 shadow-sm shadow-neutral-800">
        <h1 className="text-neutral-800 font-medium text-6xl">
          Ready to get your Personal Portfolio to the{" "}
          <span className="uppercase font-bold text-white italic">
            next level
          </span>
          ?
        </h1>
        <button className="btn mt-7 bg-neutral-800 text-green-400 border-neutral-800">
          Bring It On!
        </button>
      </div>
    </div>
  );
}

export default CTA;
