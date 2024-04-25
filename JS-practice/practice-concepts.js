const _isEqual = (arr1, arr2) => {
  const checkEquality = (elem1, elem2) => {
    if (Array.isArray(elem1) && Array.isArray(elem2)) {
      return _isEqual(elem1, elem2);
    } else if (typeof elem1 === "object" && typeof elem2 === "object") {
      const result = Object.keys(elem1).every((key) =>
        checkEquality(elem1[key], elem2[key])
      );
      return result;
    }
    return elem1 === elem2;
  };

  for (let i = 0; i < arr1.length; i++) {
    const result = checkEquality(arr1[i], arr2[i]);
    if (!result) {
      return false;
    }
  }
  return true;
};

const arr1 = [
  1,
  2,
  3,
  4,
  { name: "amit", address: ["kherka", "gujjar"] },
  [3, 2, 4],
];
const arr2 = [
  1,
  2,
  3,
  4,
  { name: "amit", address: ["kherka", "gujjar"] },
  [3, 2, 4],
];

const isEqual = _isEqual(arr1, arr2);
console.log(isEqual);
