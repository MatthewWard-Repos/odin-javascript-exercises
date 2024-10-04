const leapYears = function (year) {
  if (
    Number.isInteger(year / 400) ||
    (Number.isInteger(year / 4) && !Number.isInteger(year / 100))
  ) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
