const totalIntegers = function (container) {
  if (typeof container !== "object" || container === null) return undefined;

  let integers = 0;
  const values = Array.isArray(container)
    ? container
    : Object.values(container);

  values.forEach((value) => {
    if (Number.isInteger(value)) integers++;
    else if (typeof value === "object" && value !== null) {
      integers += totalIntegers(value);
    }
  });

  return integers;
};

totalIntegers([
  NaN,
  [[{}], 555],
  "444",
  [],
  74.0,
  undefined,
  [[() => {}], [4], Infinity, [[[], -44.0], [null, "-4"], NaN[[]], 6]],
  () => {},
  [[], [-Infinity, ["4"], [4.7, -46.7], NaN]],
]);
// Do not edit below this line
module.exports = totalIntegers;
