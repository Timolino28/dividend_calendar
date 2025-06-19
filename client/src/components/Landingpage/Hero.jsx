import React from "react";

function Hero() {
  return (
    <div className="hero bg-neutral-800 py-5">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl text-green-400 font-black font-roboto">
            The Hunting List for future{" "}
            <span className="uppercase italic tracking-wide leading-[1.5] text-5xl text-neutral-800 relative inline-block fancy-highlight">
              Millionaires!
            </span>
          </h1>
          <p className="text-white text-[18px] py-6">
            Save prospect stocks, track their performance and build the
            foundation for one monkey-mad portfolio
          </p>
          <div
            class="tenor-gif-embed mx-auto"
            data-postid="14116367"
            data-share-method="host"
            data-aspect-ratio="1.36806"
            data-width="50%"
          >
            <a href="https://tenor.com/view/monkey-with-money-happy-withmoney-swag-dollars-more-money-gif-14116367">
              Monkey With Money Happy Withmoney GIF
            </a>
            from{" "}
            <a href="https://tenor.com/search/monkey+with+money-gifs">
              Monkey With Money GIFs
            </a>
          </div>{" "}
          <script
            type="text/javascript"
            async
            src="https://tenor.com/embed.js"
          ></script>
        </div>
      </div>
    </div>
  );
}

export default Hero;
