

const strongestNeighbour = arr => {
    const newArr = [];
    if(arr.length < 2) return arr;
    for(let i =0; i<arr.length - 1; i++) newArr.push(Math.max(arr[i], arr[i+1]));
    return newArr;
};

const arr = [78];
const output = strongestNeighbour(arr);
console.log(output);