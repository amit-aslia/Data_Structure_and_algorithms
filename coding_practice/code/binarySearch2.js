// A sorted array of n dinstict integer, find an element
// such that a[i] == i

const binarySearch = (arr, i, j) => {
    if(i == j) {
        if(arr[i] === i) {
            return i;
        };
        return -1;
    }
    const mid = Math.floor((i+j)/2);
    if(arr[mid] == mid) return mid;
    if(arr[mid] > mid) return binarySearch(arr, 0, mid-1);
    return binarySearch(arr, mid + 1, j);
}


const arr = [-1,0,1,2,3,4,5,6,8,34,45,56];
const findElementIndex = binarySearch(arr, 0, arr.length -1);
console.log(findElementIndex)