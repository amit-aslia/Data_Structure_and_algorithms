function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      }
    }
  }
}

// Example usage
const add = (a, b, c) => a + b + c; // dynamic -> ...args -> fn.length = 0

const curriedAdd = curry(add);

const partialAdd = curriedAdd(1, 2); // function(...moreargs ) {}
const result = partialAdd(3);
console.log(result);
