const factorial = function (n) {
  //   if (n < 0 || n % 1 !== 0 || typeof n !== "number") {
  //     return undefined;
  //   } else if (n === 1 || n === 0) {
  //     return 1;
  //   } else {
  //     return n * factorial(n - 1);
  //   }
  if (!Number.isInteger(n) || n < 0) return;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(4));
// Do not edit below this line
module.exports = factorial;
