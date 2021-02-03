/* 
Given an array arr[] of size N of positive integers which may have duplicates. The task is to find the maximum and second maximum from the array, and both of them should be distinct, so If no second max exists, then the second max will be -1.
*/

const largestAndSecondLarget = (arr) => {
    let max1 = -1; let max2 = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i] < max1) {
            max2 = Math.max(arr[i], max2);
        }
    };
    return [max1,max2];
};

const arr = [5,5,5,5,4];
const output = largestAndSecondLarget(arr);
console.log(output);