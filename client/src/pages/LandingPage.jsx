import React, { useEffect, useState } from "react";
import NavBarLanding from "../components/Landingpage/NavBarLanding";
import Hero from "../components/Landingpage/Hero";
import PainSection from "../components/Landingpage/PainSection";
import Features from "../components/Landingpage/Features";
import CTA from "../components/Landingpage/CTA";
import FAQ from "../components/Landingpage/FAQ";
import Testimonial from "../components/Landingpage/Testimonial";
import SuccessBadge from "../components/SuccessBadge";

function LandingPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <>
      {showSuccess && <SuccessBadge />}

      <NavBarLanding />
      <Hero />
      <PainSection />
      <Features />
      <Testimonial />
      <CTA onSuccess={() => setShowSuccess(true)} />
      <FAQ />
    </>
  );
}

export default LandingPage;
