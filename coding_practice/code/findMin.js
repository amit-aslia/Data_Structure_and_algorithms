const prompt = require('prompt-sync')();

const findMinimin = (arr, len) => {
    if (len === 0) {
        return 'No element is present in array'
    }
    if(len === 1) {
        return arr[0]
    }
    return Math.min(arr[len -1], findMinimin(arr, len -1 ))

}

const arr = [];
const min = findMinimin(arr, arr.length);
console.log(min)

