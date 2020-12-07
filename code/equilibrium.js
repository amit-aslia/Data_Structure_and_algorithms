const arr = [1,2,0,3];

const equil = (arr) => {
    let sum = arr.reduce((acc,cv) => acc + cv);
    let leftSum = 0;
    for(let i =1; i< arr.length; i++) {
        leftSum = leftSum + arr[i-1];
        let rightSum = sum - (leftSum + arr[i]);
        if(rightSum == leftSum) {
            return i;
        }
    }
    return -1;
};

console.log(equil(arr));