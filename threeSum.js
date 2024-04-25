const threeSum = (arr, sum) => {
  for (let i = 0; i < arr.length - 2; i++) {
    const map = {};
    const cSum = sum - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (map[cSum - arr[j]]) {
        return [arr[i], arr[j], map[cSum - arr[j]]];
      } else {
        map[arr[j]] = arr[j];
      }
    }
  }
};

let arr = [1, 4, 45, 6, 10, 8];

let sum = 22;

console.log(threeSum(arr, sum));
