function getNthFib(n) {
  // Write your code here.
  if (n === 1) return 0;
  if (n === 2) return 1;
  let lastTwo = [0, 1];
  let i = 3;
  while (i <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    i++;
  }
  return lastTwo[1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
