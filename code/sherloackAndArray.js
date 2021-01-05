
const sherloack = arr => {
    let sum = arr.reduce((acc,cv) => acc + cv, 0);
    let leftSum = 0;
    let rightSum = sum - arr[0];
    for(let i = 0; i<arr.length; i++) {
        if(leftSum === rightSum) return 'YES';
        if(i >= arr.length / 2 && leftSum > rightSum) return 'NO' 
        leftSum = leftSum + arr[i];
        rightSum = rightSum - (arr[i+1] ? arr[i+1] : 0);
    }
    return 'NO'
};
const arr = [1,2,3,3,3];
const ouput = sherloack(arr);
console.log(ouput)