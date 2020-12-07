const object = {};
const findMaxMin = (arr, i , j) => {
    const { max, min } = object;
    if(i === j) {
        max = min =arr[i];
    }
    if(i === j-1) {
        if(arr[i] < arr[j]) {
            max = arr[j];
            min = arr[i];
        }
        else {
            max = arr[i];
            min = arr[j]
        }
    }
    const mid = Math.floor((i + j)/2);
    
}

const arr = [70,50,40,1,2,3]
const obj = findMaxMin(arr, 0, arr.length)