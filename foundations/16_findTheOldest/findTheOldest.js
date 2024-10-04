const findTheOldest = function (arr) {
  arr
    .sort(
      (a, b) =>
        (a.yearOfDeath ?? new Date().getFullYear()) -
        (a.yearOfBirth ?? 0) -
        ((b.yearOfDeath ?? new Date().getFullYear()) - (b.yearOfBirth ?? 0))

      // if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
      //   return -1;
      // } else if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
      //   return 1;
      // } else {
      //   return 0;
      // }
    )
    .reverse();
  return arr[0];
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
