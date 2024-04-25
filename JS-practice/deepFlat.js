var flat = function (arr, n) {
  let output = [];
  const flatDeep = (arr, n) => {
    for (const ele of arr) {
      if (n <= 0) {
        output.push(ele);
      } else if (Array.isArray(ele)) {
        flatDeep(ele, n - 1);
      } else {
        output.push(ele);
      }
    }
  };
  flatDeep(arr, n);
  return output;
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];

console.log(flat(arr, 1));
