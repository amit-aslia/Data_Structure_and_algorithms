
const reverse = (arr,k) => {
    let newArr = [];
    let i = 0;
    let x = 1;
    let interval = 1;
    while(i < arr.length) {
        if(k*interval - x > arr.length - 1) {
          x = k * interval - arr.length + 1;
        }
        newArr.push(arr[k*interval - x]);
        x++;
        if(x > k) {
            x = 1;
            interval++;
        }
        i++;
    }
    return newArr;
};

const str = '0 14 41 18 30 57 60 30 49 75 23 97 59 34 57 45 33 79 17 15 15 39 98 81 19 61 7 81 84 57 68 64 85 62 29 11 94 81 50 90 34 46 43 24 38 90 96 99 61 21';
let arr = str.split(' ').map(data => parseInt(data))

const p = '21 61 99 96 90 38 24 43 46 34 90 50 81 94 11 29 62 85 64 68 57 84 81 7 61 19 81 98 39 15 15 17 79 33 45 57 34 59 97 23 75 49 30 60 57 30 18 41 14 0';
let x = p.split(' ').map(d => parseInt(d));

const output = reverse(arr, 98);

output.map((data,i) => console.log(data, x[i]));
