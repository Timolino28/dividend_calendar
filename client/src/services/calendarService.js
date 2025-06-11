const API_URL = "http://localhost:8000/api/calendar";

export const fetchCalendarData = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch calendar data");
  return res.json();
};
