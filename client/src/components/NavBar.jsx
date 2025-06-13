import React from "react";

function NavBar() {
  return (
    <div className="navbar bg-neutral-800 shadow-sm">
      <div className="navbar-start">
        <a className="text-xl font-semibold text-green-400 ml-5" href="/">
          Zero Yield Club 💸
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold text-green-400">
            <a href="/calendar">Dividend Calendar</a>
          </li>
          <li className="font-semibold text-green-400">
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default NavBar;
