export function getOverallValuationScore(scores) {
  const scoreMap = {
    undervalued: 1,
    neutral: 0,
    overvalued: -1,
  };

  const total = scores
    .map((s) => scoreMap[s] ?? 0)
    .reduce((acc, curr) => acc + curr, 0);

  if (total >= 2) return "Strong Buy";
  if (total === 1) return "Buy";
  if (total === 0) return "Hold";
  if (total === -1) return "Sell";
  return "Strong Sell";
}
