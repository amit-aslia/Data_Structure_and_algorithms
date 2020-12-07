const arr = [10,20,30,40,50,60];

const swap = (arr, i,j) => {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
}

const bubbleSort = arr => {
    const len = arr.length;
    let swap;
    for(let i=0;i<len;i++) {
        if(swap == 0) {
            return arr;
        }
        swap = 0;
        for(let j=0; j<len-1-i; j++) {
            if(arr[j+1] < arr[j]) {
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
};

const sortedArray = bubbleSort(arr);
console.log(sortedArray);