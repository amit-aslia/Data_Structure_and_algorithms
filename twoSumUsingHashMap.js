const arr = [2, 7, 11, 15];

const twoSum = (arr, target) => {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (diff in seen) {
      return [seen[diff], i];
    } else {
      seen[arr[i]] = i;
    }
  }
};

console.log(twoSum(arr, 26));
