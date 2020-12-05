
const merge = (arr,i,j,k,l) => {
    const sortedArray = [];
    let count = 0;
    console.log(i,j,k,l);
    while(i<=j && k<=l) {
        if(arr[i] <= arr[k]) {
            sortedArray[count] = arr[i];
            i++;
            count++;
        }
        else {
            sortedArray[count] = arr[k];
            k++;
            count++;
        }
    };

    while(i<=j) {
        sortedArray[count] = arr[i];
        i++;
        count++;
    }
    while(k<=l) {
        sortedArray[count] = arr[k];
        k++;
        count++;
    }
    console.log(sortedArray);
    arr = [...sortedArray]
    return arr;
}
const mergeSort = (arr, i, j) => {
    if(i >= j) return arr[i]
    let mid = Math.floor((i+j)/2);
    mergeSort(arr,i,mid);
    mergeSort(arr,mid+1,j);
    return merge(arr,i,mid,mid+1,j);
    // console.log(left, right);
}
const arr = [4, 8, 7, 2, 11, 1, 3];
// mergeSort(arr,0,arr.length - 1)
console.log(mergeSort(arr,0,arr.length - 1));