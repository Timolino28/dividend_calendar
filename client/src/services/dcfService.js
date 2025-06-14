const API_URL = "http://localhost:8000/api/dcf";

export const fetchDCFData = async (symbol) => {
  const res = await fetch(`${API_URL}?symbol=${symbol}`);
  if (!res.ok) throw new Error("Failed to fetch DCF-data");
  return res.json();
};
