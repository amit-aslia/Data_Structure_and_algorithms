
const sum = (a) => {
  let currentSum = a || 0;
  return function innerSum (b) {
    if (b === undefined) return currentSum;
    else {
      currentSum+=b;
      return innerSum;
    }
  }
}

// Example usage:
// console.log(sum(12)());                          // Output: 12
console.log(sum(12)(1)(10)());         // Output: 345
// console.log(sum(12)(1, 2, 3, 4)(323)(2, 3, 4, 3, 4, 3)());  // Output: 396
