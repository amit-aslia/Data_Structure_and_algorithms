const arr1 = [1,5,7,10];
const arr2 = [3,5,6,10];
const newArray = [];

const findUnion = (i,j,k,l) => {
    while(i<=j && k<=l) {
        if(arr1[i] == arr2[k]) {
            newArray.push(arr1[i]);
            i++;
            k++;
        }
        else if(arr1[i] < arr2[k]) {
            i++;
        }
        else {
            k++;
        }
    }
    return newArray;
}


const unionArray = findUnion(0,arr1.length-1, 0, arr2.length -1);
console.log(newArray);