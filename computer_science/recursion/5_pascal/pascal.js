const pascal = function (n) {
  if (n === 1) {
    return [1];
  }
  const previousRow = pascal(n - 1);
  const middle = previousRow
    .slice(0, -1)
    .map((num, i) => num + previousRow[i + 1]);

  return [1, ...middle, 1];
};

// Do not edit below this line
module.exports = pascal;
