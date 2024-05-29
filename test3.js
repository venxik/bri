function highestPalindrome(s, k) {
  function makePalindrome(arr, l, r, k) {
    if (k < 0) return -1;
    if (l >= r) return { arr, k };

    if (arr[l] !== arr[r]) {
      let maxChar = Math.max(arr[l], arr[r]);
      arr[l] = maxChar;
      arr[r] = maxChar;
      k--;
    }

    return makePalindrome(arr, l + 1, r - 1, k);
  }

  function optimizePalindrome(arr, l, r, k) {
    if (l === r && k >= 1) {
      if (arr[l] !== "9") {
        arr[l] = "9";
        k--;
      }
      if (arr[r] !== "9") {
        arr[r] = "9";
        k--;
      }
    }

    if (l > r) return arr.join("");

    if (arr[l] === arr[r]) {
      if (arr[l] !== "9" && k >= 2) {
        arr[l] = "9";
        arr[r] = "9";
        k -= 2;
      }
    }

    return optimizePalindrome(arr, l + 1, r - 1, k);
  }

  let arr = s.split("");
  let n = arr.length;

  let initialResult = makePalindrome(arr.slice(), 0, n - 1, k);
  if (initialResult === -1) return -1;

  return optimizePalindrome(initialResult.arr, 0, n - 1, initialResult.k);
}
