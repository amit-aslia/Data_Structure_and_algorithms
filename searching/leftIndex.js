
const leftIndex = (arr, i , j, x) => {
  if(i == j) {
    if(arr[i] == x) {
        return i;
    }
    return -1;
}
  let mid = Math.floor((i+j)/2);
  if(arr[mid] == x && arr[mid -1 ] != x) return mid;
  if(arr[mid] >= x) return leftIndex(arr, i, mid - 1,x);
  else return leftIndex(arr, mid + 1, j,x);
}


const arr = [];

const out = leftIndex(arr, 0 , arr.length - 1, 23);
console.log(out);