const contains = function (obj, val) {
  let values = Object.values(obj);
  if (values.includes(val)) return true;
  for (value of values) {
    if (typeof value === "object" && value) {
      if (contains(value, val)) return true;
    }
  }
  return false;
};

// const contains = function (object, searchValue) {
//   const values = Object.values(object);
//   if (values.includes(searchValue)) return true;

//   const nestedObjects = values.filter(
//     (value) => typeof value === "object" && value !== null,
//   );

//   return nestedObjects.some((nestedObject) =>
//     contains(nestedObject, searchValue),
//   );
// };

// Do not edit below this line
module.exports = contains;
