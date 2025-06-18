export function getDCFScore(dcf, stockPrice) {
  if (!dcf || !stockPrice) return null;
  const ratio = dcf / stockPrice;

  if (ratio >= 1.2) return "undervalued";
  if (ratio < 0.8) return "overvalued";
  return "neutral";
}

export function getPEScore(pe) {
  if (pe == null) return null;

  if (pe < 15) return "undervalued";
  if (pe > 25) return "overvalued";
  return "neutral";
}

export function getPBScore(pb) {
  if (pb == null) return null;

  if (pb < 1.0) return "undervalued";
  if (pb > 3.0) return "overvalued";
  return "neutral";
}

export function getDEScore(de) {
  if (de == null) return null;

  if (de < 0.5) return "undervalued";
  if (de > 2.0) return "overvalued";
  return "neutral";
}
