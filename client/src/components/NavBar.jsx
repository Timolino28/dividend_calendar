import React from "react";

function NavBar() {
  return (
    <div className="navbar min-h-25 bg-neutral-800 border-b-2 border-solid border-bottom border-green-400">
      <div className="navbar-start">
        <a className="text-xl font-semibold text-green-400 ml-5" href="/">
          Zero Yield Club 💸
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li className="text-xl font-semibold text-green-400">
            <a href="/calendar">Dividend Calendar</a>
          </li>
          <li className="text-xl font-semibold text-green-400">
            <a>Valuation Check</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default NavBar;
