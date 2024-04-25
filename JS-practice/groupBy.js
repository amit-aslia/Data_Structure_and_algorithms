const groupBy = (arr, fn) => {
  const obj = {};
  for (const ele of arr) {
    const key = fn(ele);
    if (obj[key] !== undefined) {
      obj[key] = [...obj[key], ele];
    } else {
      obj[key] = [ele];
    }
  }
  return obj;
};

const fn = (n) => {
  return String(n > 5);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(groupBy(array, fn));
