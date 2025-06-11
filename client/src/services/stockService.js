const API_URL = "http://localhost:8000/api/stock";

export const fetchStockData = async (symbol) => {
  const res = await fetch(`${API_URL}?symbol=${symbol}`);
  if (!res.ok) throw new Error("Failed to fetch stock data");
  return res.json();
};
