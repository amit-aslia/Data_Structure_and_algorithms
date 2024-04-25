var join = function (arr1, arr2) {
  let items = arr1.concat(arr2);
  console.log(items);
  let result = {};

  for (const obj of items) {
    if (!result[obj.id]) {
      result[obj.id] = obj;
      continue;
    }

    result[obj.id] = { ...result[obj.id], ...obj };
  }
  return Object.values(result);
};

const arr1 = [
  { id: 0, b: 16, y: 92, e: 90, x: 96, k: 11, z: 92, u: 28, t: 68, n: 45 },
  { id: 2, n: 36, v: 42, i: 60, w: 37, p: 78 },
];
const arr2 = [
  { id: 0, r: 74, x: 12, n: 87, f: 87, j: 53, p: 16, b: 85, m: 73 },
  { id: 1, b: 27, c: 21, d: 6, r: 93, z: 34 },
];

console.log(join(arr1, arr2));
