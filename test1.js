function weightedStrings(s, queries) {
  const weightMap = {};
  for (let i = 1; i <= 26; i++) {
    weightMap[String.fromCharCode(96 + i)] = i;
  }

  const weights = new Set();

  let currentWeight = 0;
  let currentChar = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== currentChar) {
      currentChar = s[i];
      currentWeight = 0;
    }
    currentWeight += weightMap[s[i]];
    weights.add(currentWeight);
  }

  const result = queries.map((query) => (weights.has(query) ? "Yes" : "No"));
  return result;
}
