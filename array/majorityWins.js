
/* 
Given an array arr[] of size N and two elements x and y, use counter variables to find which element appears most in the array, x or y. If both elements have the same frequency, then return the smaller element.
Note:  We need to return the element, not its count.
*/


const majorityWins = (arr, x, y) => {
    let counter1 = 0;
    let counter2 = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) counter1++;
        else if(arr[i] === y) counter2++;
        else continue;
    }
    if(counter1 === counter2) {
        return x < y ? x : y;
    }
    else if (counter1 > counter2) return x;
    else return y;
};

const arr = [1,1,2,2,3,3,4,4,4,4,5];

const output = majorityWins(arr, 4,5);
console.log(output);