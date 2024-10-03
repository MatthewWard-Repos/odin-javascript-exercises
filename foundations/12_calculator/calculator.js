const add = function (...numbers) {
  return numbers.reduce((sum, number) => (sum += number));
};
const subtract = function (...numbers) {
  return numbers.reduce((sum, number) => (sum -= number));
};

const sum = function (...numbers) {
  if (numbers.flat().length < 1) return 0;
  return numbers.flat().reduce((sum, number) => (sum += number));
};
const multiply = function (...numbers) {
  return numbers.flat().reduce((sum, number) => (sum *= number));
};
const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  let sum = number;
  if (number === 0) return 1;
  while (number > 1) {
    number--;
    sum *= number;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
