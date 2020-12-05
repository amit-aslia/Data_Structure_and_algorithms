/*
    A sorted array of n element(distinct), find any 2 element a and b
    Such that a+b = x
*/
const prompt = require('prompt-sync')();

const findSum = (arr, value) => {
    let flag = false;
    let i = 0;
    let j = arr.length -1;
    while(i <= j) {
        if(arr[i] + arr[j] == value) {
            flag = true;
            break;
        }
        if(arr[i] + arr[j] > value)  j--;
        
        else i++;
    }
    return flag ? { i, j } : -1;
}

const arr = [1,2,3,4,5,6,7,8];
value = prompt('Enter the value');
const elements = findSum(arr, value);
console.log(elements);