import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

function NavBar() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="navbar flex-col md:flex-row px-5 bg-neutral-900 border-b-[2px] border-green-400">
      <div className="navbar-start">
        <a
          className="md:text-xl text-sm font-semibold text-neutral-100 ml-5"
          href="/"
        >
          <span className="uppercase italic tracking-wide leading-[1.5] text-neutral-800 font-black relative z-10 inline-block fancy-highlight">
            Zero Yield Club
          </span>
        </a>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1 md:gap-10">
          <li className="text-base font-semibold text-neutral-100">
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
            >
              Features
            </Link>
          </li>
          <li className="text-base font-semibold text-neutral-100">
            <Link to="cta" spy={true} smooth={true} offset={0} duration={500}>
              Pricing
            </Link>
          </li>
          <li className="text-base font-semibold text-neutral-100">
            <Link to="faq" spy={true} smooth={true} offset={40} duration={500}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-5">
        {/*  <a href="/calendar">
          {" "}
          <button className="btn bg-neutral-100 hover:bg-green-400">
            Get Started
          </button>
        </a> */}
      </div>
    </div>
  );
}

export default NavBar;
