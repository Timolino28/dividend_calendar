import React from "react";
import NavBarLanding from "../components/Landingpage/NavBarLanding";
import Hero from "../components/Landingpage/Hero";
import PainSection from "../components/Landingpage/PainSection";
import Features from "../components/Landingpage/Features";
import CTA from "../components/Landingpage/CTA";
import FAQ from "../components/Landingpage/FAQ";

function LandingPage() {
  return (
    <>
      <NavBarLanding />
      <Hero />
      <PainSection />
      <Features />
      <CTA />
      <FAQ />
    </>
  );
}

export default LandingPage;
