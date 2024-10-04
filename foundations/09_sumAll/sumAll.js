const sumAll = function (max, min) {
  if (!Number.isInteger(max) || !Number.isInteger(min) || max < 0 || min < 0)
    return "ERROR";
  if (min > max) [max, min] = [min, max];
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
