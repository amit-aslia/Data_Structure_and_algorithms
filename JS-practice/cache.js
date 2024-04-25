const sum = (a, b) => a + b;

const createCacheFunction = function (fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('cached resilt');
      return cache[key];
    } else {
      const result = fn(...args);
      console.log('original resilt');

      cache[key] = result;
      return result;
    }
  };
  
};

const cachedSum = createCacheFunction(sum);

console.log(cachedSum(1, 2)); //  3
console.log(cachedSum(1, 2)); // 3 cached
console.log(cachedSum(1, 3)); // 4
