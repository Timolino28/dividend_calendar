import React from "react";
import Logo from "../assets/logo_weiß.png";

function Footer() {
  return (
    <footer className="bg-neutral-900 border-t-[0.5px] border-green-400 text-neutral-content px-10 py-8">
      <div className="sm:footer-horizontal flex flex-col sm:flex-row justify-between items-center w-full">
        <aside className="text-base mb-4 sm:mb-0">
          Built by{" "}
          <img
            src={Logo}
            alt="Logo"
            className="inline-block h-7 align-middle"
          />
        </aside>
        <p className="text-xs text-neutral-400 text-center max-w-4xl mx-auto leading-snug">
          Disclaimer: The information provided on this platform is for
          informational and educational purposes only and does not constitute
          financial or investment advice. All investment decisions are made at
          your own risk.
        </p>
        <nav className="flex gap-4">
          <a className="text-base text-green-400" href="/terms-of-use">
            Terms of use
          </a>
          <a className="text-base text-green-400" href="/privacy-policy">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
