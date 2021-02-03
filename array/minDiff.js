
const minDiff = (arr, n) => {
    let minDiff = Math.abs(arr[n-1] - arr[0]);
    for(let i = 0; i<n-1; i++) {
        let diff = Math.abs(arr[i] - arr[i+1]);
        minDiff = Math.min(minDiff, diff)
    }
    return minDiff;
};


const s = '70 93 59 35 4 98 94 45 89 18 13 75 55 28 48 52 24 96 91 38 38 19 18 42 87 48 84 92 20 62 9 74 36 11 57 41 52 31 37 43 72 34 60 51';
let a = s.split(' ').map(d => parseInt(d));
const output = minDiff(a,a.length);
console.log(output);