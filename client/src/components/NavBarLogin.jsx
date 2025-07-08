import React from "react";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div
      className={
        isLanding
          ? "navbar bg-neutral-900 border-b-[0.5px] border-green-400"
          : "navbar min-h-25 bg-neutral-900 border-b-2 border-green-400"
      }
    >
      <div className="navbar-start pl-5">
        <a
          className="text-xl uppercase italic tracking-wide leading-[1.5] text-neutral-800 font-black relative z-10 inline-block fancy-highlight"
          href="/"
        >
          Zero Yield Club
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li
            className={`${
              isLanding ? "text-base" : "text-xl"
            } font-semibold text-neutral-100`}
          >
            <a href="/calendar">Dividend Calendar</a>
          </li>
          <li
            className={`${
              isLanding ? "text-base" : "text-xl"
            } font-semibold text-neutral-100`}
          >
            <a href="/valuation-check">Valuation Check</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default NavBar;
