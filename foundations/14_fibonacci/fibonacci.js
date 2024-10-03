const fibonacci = function (n) {
  if (+n < 0) return "OOPS";
  if (+n === 0) return 0;
  let n1 = 0;
  let n2 = 1;
  let result = 0;
  for (let i = 2; i <= +n; i++) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
  }
  console.log(result);
  return n2;
};
fibonacci("4");
// Do not edit below this line
module.exports = fibonacci;
