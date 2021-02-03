const missingPositive = (arr, n) => {
  const positiveArr = arr.filter((d, index) => {
    if(d < 1) {
      arr[index] = -1;
      return false;
    } 
    else return true;
  });
  for(let i = 0; i<positiveArr.length; i++) {
    arr[positiveArr[i]] = -1
  };
  for(let i = 0; i<n; i++) {
    if(arr[i] !== -1) return i;
  }
}

const arr = [0,-10,1,3,-20];


const out = missingPositive(arr, arr.length);
console.log(out);
