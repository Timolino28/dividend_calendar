import React from "react";
import { Link } from "react-router-dom";

function TermsOfUse() {
  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center px-4 py-10">
      <div className="max-w-3xl w-full">
        <Link to="/" className="text-green-500 underline mb-6 inline-block">
          ← Back to Homepage
        </Link>

        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Agreement</h2>
          <p className="text-neutral-700">
            By using this website, you agree to the following terms. These may
            be updated without notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
          <p className="text-neutral-700">
            The content provided is for informational purposes only and does not
            constitute financial advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Contact</h2>
          <p className="text-neutral-700">
            If you have questions, contact us at terms@example.com.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsOfUse;
