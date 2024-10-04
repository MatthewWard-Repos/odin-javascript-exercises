const removeFromArray = function (arr, ...remove) {
  //   return arr.filter((val) => !remove.includes(val));
  for (pos of remove) {
    while (arr.includes(pos)) {
      arr.splice(arr.indexOf(pos), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
