


findPower = (n,m) => {
    if(n === 0) {
        return 0;
    }
    if(m ===0 ) {
        return 1;
    }
    return n * findPower(n, m-1);
}

const n = 3;
const m = 4;
const num = findPower(n,m);
console.log(num);