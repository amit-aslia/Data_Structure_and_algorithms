

const floor = (arr, i, j, x) => {
  if(i>=j) {
    if(arr[i] < x) return i;
    else return -1;
  }
  let mid = Math.floor((i+j)/2);
  if(arr[mid] == x ) return mid - 1;
  if(arr[mid] < x && arr[mid + 1] > x) return mid;
  if(arr[mid] < x) return floor(arr, mid + 1, j, x);
  return floor(arr, i, mid - 1, x);
}

const arr = [1,2,8,10,11,12,19];

const out = floor(arr,0,arr.length - 1, 8);
console.log(out);