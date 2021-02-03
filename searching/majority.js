// used moore algorithm
const checkMajority = (arr, n) => {
  let count = 0;
  for(let i = 0; i< arr.length; i++) {
    if(n == arr[i]) count++;
  }
  return count > Math.floor(arr.length / 2);
}

const majority = (arr, size) => {
  let me = arr[0];
  let count = 1;
  for(let i = 1; i<size; i++) {
    if(me == arr[i]) count++;
    else count--;
    if(count == 0) {
      me = arr[i];
      count = 1;
    }
  }
  const isMajority = checkMajority(arr, me);
  return isMajority ? me : -1;
};

const arr = '3 3 3 3 1 1 1';
let a = arr.split(' ').map(d => parseInt(d));



const output = majority(a, a.length);
console.log(output);