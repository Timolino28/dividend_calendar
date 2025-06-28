import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

function NavBar() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="navbar bg-neutral-900 border-b-[2px] border-green-400">
      <div className="navbar-start">
        <a className="text-xl font-semibold text-neutral-100 ml-5" href="/">
          Zero Yield Club 💸
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
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
        <label className="text-neutral-100 lg:hidden swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </div>
  );
}

export default NavBar;
