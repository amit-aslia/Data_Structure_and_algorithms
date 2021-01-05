
// Find out minimum and maximum element of array.

const findMinimum = arr => {
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        // logic
        if ( arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
};


const arr = [7,-1,-23,12,343,1,2,7,4,2,9];
const minimum = findMinimum(arr);

console.log(minimum);