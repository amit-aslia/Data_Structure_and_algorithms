const arr = [1, 2];

const maxSubArray = (arr) => {
  // if current element is greater than currentBest -> change the serquence
  // if current best seq sum is greater than OB replace it also

  let csum = arr[0];
  let osum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (csum > 0) {
      csum = csum + arr[i];
    } else {
      csum = arr[i];
    }

    if (csum > osum) {
      osum = csum;
    }
  }
  return osum;
};

console.log(maxSubArray(arr));
