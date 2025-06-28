import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="bg-neutral-100 py-10">
      <div className="flex flex-col items-center max-w-5xl mx-auto pt-10 px-8">
        <div className="badge badge-soft mb-3">Testimonials</div>
        <h1 className="text-4xl font-semibold">Don't take our word for it</h1>
        {/*Rating*/}
        <div className="flex mt-2 text-green-400 text-2xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      <div className="max-w-[1450px] flex justify-center gap-10">
        <div className="flex justify-center items-center">
          <div>
            <div
              className="tenor-gif-embed"
              data-postid="14116367"
              data-share-method="host"
              data-aspect-ratio="1.36806"
              data-width="300px"
            >
              <a href="https://tenor.com/view/monkey-with-money-happy-withmoney-swag-dollars-more-money-gif-14116367">
                Monkey With Money Happy Withmoney GIF
              </a>
              from{" "}
              <a href="https://tenor.com/search/monkey+with+money-gifs">
                Monkey With Money GIFs
              </a>
            </div>
            <script
              type="text/javascript"
              async
              src="https://tenor.com/embed.js"
            ></script>
          </div>
        </div>

        <div className="flex items-center px-6">
          <h1 className="text-3xl font-bold text-neutral-800 leading-snug">
            Do it like Julius and let the <br />
            <span className="text-green-400">Zero Yield Club</span> do the heavy
            lifting for you
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
