import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center px-4 py-10">
      <div className="max-w-3xl w-full">
        <Link to="/" className="text-green-500 underline mb-6 inline-block">
          ← Back to Homepage
        </Link>

        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-neutral-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            placerat vehicula quam, sed luctus arcu luctus ac.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Data Collection</h2>
          <p className="text-neutral-700">
            We collect limited personal data such as your name and email
            address. This data is used for providing access to our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Contact</h2>
          <p className="text-neutral-700">
            If you have questions, contact us at privacy@example.com.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
