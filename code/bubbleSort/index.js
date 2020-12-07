const arr = [70,80,90,85,75,15,-1,95,100,10];

const swap = (arr, i,j) => {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
}

const bubbleSort = arr => {
    const len = arr.length;
    let count = 0;
    for(let i=0;i<len;i++) {
        for(let j=0; j<len-1-i; j++) {
            count++
            if(arr[j+1] < arr[j]) {
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
};

const sortedArray = bubbleSort(arr);
console.log(sortedArray);