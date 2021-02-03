

const count = (arr, i , j) => {
  if(i >= j) {
    if(arr[i] === 1) return i + 1;
    else return 0;
  }

  let mid = Math.floor((i+j)/2);
  if(arr[mid] == 1 && arr[mid + 1] == 0)  return mid + 1;
  else if(arr[mid] == 0 && arr[mid - 1] == 1) return mid;
  else if(arr[mid] == 1 && arr[mid + 1] == 1) return count(arr, mid + 1, j);
  else return count(arr, i, mid - 1);
}

const arr = [1,1,1];

const output = count(arr, 0 , arr.length - 1);
console.log(output);
console.log(Math.sqrt(4));