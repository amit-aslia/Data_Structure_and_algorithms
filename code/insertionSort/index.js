const arr = [70,80,90,85,75,15,-1,95,100,10];

const swap = (arr, i,j) => {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
}

const sortedArray = (arr, len) => {
    for(let i = 1; i<len; i++) {
        for(let j=i; j>0; j--) {
            if(arr[j] < arr[j-1]) {
                swap(arr,j,j-1);
            }
            else break;
        }
    }
    return arr;
}

const sort = sortedArray(arr,arr.length);
console.log(sort);