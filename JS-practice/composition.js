var compose = function (functions) {
  return function (x) {
    const result = functions.reduceRight((acc, currentFn) => {
      acc = currentFn(acc);
      return acc;
    }, x);
    return result;
  };
};

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// console.log(fn(4)); // 9

const f1 = n => n + 1;
const f2 = n => n * 2;

const pipe = (...fns) => x => fns.reduce((acc, currentF) => currentF(acc), x);

console.log(pipe(f1,f2)(4));

