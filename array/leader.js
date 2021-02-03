const leader = (arr, n) => {
  let max = arr[n-1];
  const leaderArr = [arr[n-1]];
  for(let i = n -2; i >= 0; i--) {
    if(arr[i] > max) {
      leaderArr.push(arr[i]);
      max = arr[i];
    }
  }
  return leaderArr.reverse();
}

const arr = [16,17,4,3,5,2];


const output = leader(arr,arr.length);
console.log(output);