/* 
    An array of n element in which some place all  are integer and afterword all are $
*/

const binarySearch = (arr, i,j) => {
    if(i == j){
        if(arr[i] === -1) {
            return i;
        }
        else {
            return -1
        }
    }
    const mid = Math.floor((i+j)/2);
    if(arr[mid] === -1  && arr[mid-1] != -1) {
        return mid;
    }
    if(arr[mid] > -1) {
        return binarySearch(arr, mid+1, j);
    }
    else {
        return binarySearch(arr, i , mid-1)
    }

 }

const findLenght = arr => {
    let i = 1;
    while(true) {
        if(arr[i-1] == -1) {
            break;
        }
        i = i * 2;
    }
    return i;
}

const arr = [0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
const findLen = findLenght(arr);
const firstIndex = binarySearch(arr,0,findLen);
console.log(firstIndex);