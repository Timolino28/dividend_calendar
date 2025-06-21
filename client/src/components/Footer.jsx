import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral-800 text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Built by 28 Innovation Lab</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="#">Terms of use</a>
        <a href="#">Privacy Policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
