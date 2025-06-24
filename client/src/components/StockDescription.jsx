import React, { useState } from "react";

function StockDescription({ description }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 250; // Zeichenzahl, bevor gekürzt wird

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const shouldTruncate = description.length > maxLength;
  const displayedText =
    expanded || !shouldTruncate
      ? description
      : description.slice(0, maxLength) + "...";

  return (
    <div className="text-neutral-800">
      <p>{displayedText}</p>
      {shouldTruncate && (
        <button
          onClick={toggleExpanded}
          className="text-green-500 mt-2 underline text-sm cursor-pointer"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default StockDescription;
