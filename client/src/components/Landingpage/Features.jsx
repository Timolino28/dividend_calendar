import React from "react";

function Features() {
  return (
    <div className="bg-neutral-800 pt-10">
      <div className="max-w-5xl mx-auto py-10 px-8">
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome to the{" "}
          <span className="text-green-400">Zero Yield Club!</span>
        </h1>
        <p className="text-white text-2xl text-center mt-3 mb-10">
          May we introduce you the solution with our two grandiose features
        </p>
        <div className="flex gap-10">
          <div className="bg-green-400 border-2 border-green-200 py-5 px-4 rounded-md">
            <h2 className="text-xl uppercase text-green-800 font-bold mb-5">
              Dividend Calendar
            </h2>
            <p className="text-neutral-800 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quis voluptates autem illo repellat cum eius voluptas ab quia,
              ullam, corrupti quam ipsa. Architecto mollitia, sit rem debitis
              quaerat dolores facilis? Ad impedit possimus placeat?
            </p>
          </div>
          <div className="bg-green-400 border-2 border-green-200 py-5 px-4 rounded-md">
            <h2 className="text-xl uppercase text-green-800 font-bold mb-5">
              Valuation Check
            </h2>
            <p className="text-white text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              animi, quaerat excepturi officiis amet magni adipisci, unde sunt
              molestias vel non natus ab maiores porro. Nesciunt corporis sequi
              non voluptates iure, culpa sit alias blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
