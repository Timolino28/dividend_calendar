import React, { useEffect, useState } from "react";

function SuccessBadge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Slide in

    const timeout = setTimeout(() => {
      setVisible(false); // Slide out
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      role="alert"
      className={`w-70 md:w-90 fixed left-1/2 -translate-x-1/2 z-50 alert bg-neutral-100 border border-neutral-900 text-neutral-900 shadow-lg transition-all duration-500 ease-in-out
        ${visible ? "top-6 opacity-100" : "-top-20 opacity-0"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>You successfully joined our waiting list!</span>
    </div>
  );
}

export default SuccessBadge;
