

const equilibrium = (arr, n) => {
  let sum = arr.reduce((acc,cv) => acc + cv);
  let leftSum = 0;
  let rightSum = sum - arr[0];
  if(arr.length == 1) return 1;
  for(let i = 1; i<n; i++) {
    console.log(leftSum,rightSum);
    if(leftSum == rightSum) return i + 1;
    leftSum = sum - rightSum;
    rightSum = rightSum - arr[i];
  }
}

const arr = [1];

const output = equilibrium(arr,arr.length);
console.log(output);