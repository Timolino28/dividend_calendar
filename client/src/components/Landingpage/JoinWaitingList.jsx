import React, { useState } from "react";

function JoinWaitingList({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
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

    setIsSuccess(true);
    onClose();

    console.log(mailAddress, firstName);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="card bg-neutral-800 text-white w-96 shadow-lg border border-green-400">
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
              <p className="text-xs text-red-400 mb-4">{nameError}</p>
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
            {emailError && <p className="text-xs text-red-400">{emailError}</p>}
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-sm bg-red-400 text-black mt-5 mr-1"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="btn btn-sm bg-green-400 text-black mt-5 mr-3"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinWaitingList;
