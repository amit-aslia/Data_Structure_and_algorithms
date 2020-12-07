const arr = [-1,-23,1,32,-2,-3,1,2,34];
const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
const partition = (arr, p, q) => {
    let x = arr[p];
    let i = p;
    for(let j = p + 1; j<= q; j++) {
        if(arr[j] <= x) {
            i++;
            swap(arr,i, j);
        }
    }
    swap(arr, p, i);
    return i;
};

const quickSort = (arr, p, q) => {
    if(p>=q)  return arr[p];
    
    else {
        let m = partition(arr, p, q);
            quickSort(arr, p, m-1);
            quickSort(arr, m+1, q);
    }
    return arr;
};

console.log(quickSort(arr, 0, arr.length - 1));

