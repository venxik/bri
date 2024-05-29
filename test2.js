function isBalanced(s) {
  const stack = [];
  const openingBrackets = new Set(["{", "[", "("]);
  const closingBrackets = new Set(["}", "]", ")"]);
  const matchingBrackets = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let char of s) {
    if (openingBrackets.has(char)) {
      stack.push(char);
    } else if (closingBrackets.has(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}
