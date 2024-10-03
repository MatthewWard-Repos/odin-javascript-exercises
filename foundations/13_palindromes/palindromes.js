const palindromes = function (str) {
  const alphaNumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
  const words = [...str.toLowerCase()].filter((item) =>
    alphaNumerical.includes(item)
  );
  return words.join() === words.reverse().join();
};
// Do not edit below this line
module.exports = palindromes;
