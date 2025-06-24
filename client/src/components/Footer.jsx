import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral-900 border-t-[0.5px] border-green-400 text-neutral-content p-6">
      <aside className="grid-flow-col items-center">
        <p className="font-semibold">Built by 28 Innovation Lab</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="#">Terms of use</a>
        <a href="#">Privacy Policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
