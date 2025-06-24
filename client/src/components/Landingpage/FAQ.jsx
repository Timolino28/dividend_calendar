import React from "react";

function FAQ() {
  return (
    <div className="bg-neutral-800 py-20">
      <div className="max-w-5xl flex justify-center mx-auto px-10 py-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-neutral-100">
            Frequently asked questions
          </h1>
        </div>
        <div className="flex max-w-3xl mx-auto join join-vertical bg-base-800 px-10">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="text-white collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="text-white collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="text-white collapse-title font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="text-white collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="text-white collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div className="text-white collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
