const API_URL = "http://localhost:8000/api/valuation";

export const fetchValuationData = async (symbol) => {
  const res = await fetch(`${API_URL}?symbol=${symbol}`);
  if (!res.ok) throw new Error("Failed to fetch valuation data");
  return res.json();
};
