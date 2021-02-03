

const maxOccured = (l,r) => {
    const max = Math.max(...r);
    const arr = new Array(max + 1).fill(0);
    for(let i = 0; i < l.length; i++) {
        arr.forEach((data, index) => {
            if(index >= l[i] && index < r[i]) {
            console.log(index == 4 ? 'yes' : '');
            arr[index] = arr[index] + 1
            } 
        })
    }
    console.log(arr);
};

const left = [1,4,3,1];
const right = [15,8,5,4];

const out = maxOccured(left,right);