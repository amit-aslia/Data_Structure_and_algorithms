const prompt = require('prompt-sync')();

const findValue = (arr, i, j, x) => {
    if(i == j) {
        if(arr[i] == x) {
            return i;
        }
        return -1;
    }
    const mid = Math.floor((i+j)/2);
    if(arr[mid] == x) {
        return mid;
    }
    if(arr[mid] >= x) {
        return findValue(arr,i,mid-1, x);
    }
    else {
        return findValue(arr,mid+1, j, x);
    }
}

const arr = [1,2,3,4,5,6,7];
value = prompt('Enter value to search');
const index = findValue(arr, 0, arr.length-1, value);
console.log(index)