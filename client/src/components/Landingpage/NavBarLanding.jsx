import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

function NavBar() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="navbar sticky bg-neutral-900 border-b-[2px] border-green-400">
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
      <div className="navbar-end"></div>
    </div>
  );
}

export default NavBar;
