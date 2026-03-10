const permutations = function (arr) {
  let result = [];

  if (arr.length === 0) {
    result.push(arr);
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    const remaining = arr.toSpliced(i, 1);
    const perms = permutations(remaining);
    perms.forEach((perm) => {
      result.push([first, ...perm]);
    });
  }
  return result;
};
// Do not edit below this line
module.exports = permutations;
