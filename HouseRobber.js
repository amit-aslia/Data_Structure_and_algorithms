// const arr = [2, 1, 1, 2];

// const houseRobber = (nums) => {
//   let prev2 = 0;
//   let prev1 = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let inc = prev2 + nums[i];
//     let exc = prev1 + 0;
//     let ans = Math.max(inc, exc);
//     prev2 = prev1;
//     prev1 = ans;
//   }
//   return prev1;
// };

// console.log(houseRobber(arr));

const myPow = function (x, n) {
  if (x === 0) return 0;
  if (n === 0) return 1;
  if (n < 0) {
    if (n < 0) {
      // If the exponent is negative, calculate the reciprocal of the result
      return 1 / Math.pow(x, Math.abs(n));
    }
  }
  return x * myPow(x, n - 1);
};

console.log(myPow(2, -1));

// 2^5 => 2 * 2 * 2 * 2 * 2
// 2^-2 => 2 * 1/2

/*
  2^-2 => 2 * 1 / 2 = 1
*/
