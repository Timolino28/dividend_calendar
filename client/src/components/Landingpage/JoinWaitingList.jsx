import React, { useState } from "react";
import { joinWaitingList } from "../../lib/joinWaitingList";

function JoinWaitingList({ onClose, onSuccess, variant }) {
  const [firstName, setFirstName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
    setNameError("");
    setEmailError("");

    if (!firstName) {
      setNameError("Please enter your first name.");
      hasError = true;
    }

    if (!mailAddress) {
      setEmailError("Please enter your email address.");
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(mailAddress)) {
        setEmailError("Please enter a valid email address.");
        hasError = true;
      }
    }

    if (hasError) return;

    try {
      await joinWaitingList(firstName, mailAddress);
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Supabase error:", error.message);
      setEmailError("Something went wrong. Please try again.");
    }
  };

  const containerClass = variant === "hero" ? "px-2" : "";

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="card bg-neutral-800 text-white md:w-96 w-75 shadow-lg border border-green-400">
        <div className="card-body">
          <h2 className="card-title mb-5">Join the Waiting List</h2>
          {/* Input fields */}
          <div>
            {/* Name Field */}
            <label
              className={`input validator bg-neutral-800 text-white border-green-300 ${
                nameError ? "mb-2" : "mb-5"
              }`}
            >
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Your first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            {nameError && (
              <p
                className={`text-xs text-red-300 mb-4 text-left ${containerClass}`}
              >
                {nameError}
              </p>
            )}

            {/* Mail Input */}
            <label className="input validator mb-1 bg-neutral-800 text-white border-green-300">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="Your mail"
                required
                onChange={(e) => setMailAddress(e.target.value)}
              />
            </label>
            {emailError && (
              <p
                className={`text-xs text-red-300 mb-4 text-left ${containerClass}`}
              >
                {emailError}
              </p>
            )}
          </div>
          <div className="card-actions justify-end">
            <button
              className="cursor-pointer border border-red-300 hover:border-red-400 py-2 px-3 rounded-md bg-transparent text-xs text-red-400 font-semibold mt-5 mr-1 transition-all duration-300 ease-in-out"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="cursor-pointer border border-green-300 hover:border-green-400 py-2 px-3 rounded-md bg-transparent text-xs text-green-400 font-semibold mt-5 mr-4 transition-all duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <p className="text-xs text-neutral-300 mt-5">
            Your privacy is very important to us, that's why we will never share
            your data with third parties!
          </p>
        </div>
      </div>
    </div>
  );
}

export default JoinWaitingList;
