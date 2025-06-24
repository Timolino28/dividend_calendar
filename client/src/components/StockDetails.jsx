import React, { useRef } from "react";
import StockDescription from "./StockDescription";

function StockDetails({
  isOpen,
  stock,
  valuation,
  isLoading,
  isError,
  onClose,
}) {
  const overlayRef = useRef();

  const handleClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen || !stock) return null;

  //Hinzufügen von 1000er Trennzeichen
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleClick}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
    >
      <div className="card w-2xl bg-base-100 card-md shadow-sm border border-green-400">
        <div className="card-body">
          {isLoading && (
            <span className="loading loading-ring loading-xl"></span>
          )}

          {isError && (
            <p className="text-center text-red-500">Fehler beim Laden.</p>
          )}

          {!isLoading && !isError && stock && (
            <>
              {stock[0].image && (
                <div className="bg-neutral-800 p-2 rounded">
                  <img
                    src={stock[0].image}
                    alt={stock[0].companyName}
                    className="w-24 h-24 object-contain mx-auto mb-2"
                  />
                </div>
              )}
              <h2 className="card-title text-green-400 mt-5">
                {stock[0].companyName}
              </h2>
              <StockDescription description={stock[0].description} />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h1 className="font-bold text-green-400">Current Price</h1>
                  <p className="text-neutral-800">
                    ${stock[0].price.toFixed(2)}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-green-400">
                    Current DCF-Value
                  </h1>
                  <p className="text-neutral-800">
                    {valuation && valuation?.dcf !== undefined
                      ? `$${valuation.dcf}`
                      : "No data available"}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-green-400">Exchange</h1>
                  <p className="text-neutral-800">{stock[0].exchange}</p>
                </div>
                <div>
                  <h1 className="font-bold text-green-400">Industry</h1>
                  <p className="text-neutral-800">{stock[0].industry}</p>
                </div>
                <div>
                  <h1 className="font-bold text-green-400">Market Cap</h1>
                  <p className="text-neutral-800">
                    ${formatNumber(stock[0].marketCap)}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-green-400">ISIN</h1>
                  <p className="text-neutral-800">{stock[0].isin}</p>
                </div>
                <div>
                  <h1 className="font-bold text-green-400">IPO</h1>
                  <p className="text-neutral-800">{stock[0].ipoDate}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StockDetails;
