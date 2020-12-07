
const merge = (left, right) => {
    let sortedArray = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) sortedArray.push(left.shift());
        else sortedArray.push(right.shift())
    }
    return [...sortedArray, ...left, ...right];
}

const mergeSort = (array) => {
    if(array.length < 2 ) return array;
    const mid = Math.floor(array.length/2);
    const left = mergeSort(array.slice(0,mid));
    const right = mergeSort(array.slice(mid));
    return merge(left,right);
}

const   array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array))