

const findDigitSum = n => {
    if(Math.floor(n/10) == 0) return n;
    return n%10 + digitalRoot(Math.floor(n/10));
};

const digitalRoot = n => {
    let sum = findDigitSum(n);
    if(Math.floor(sum/10) == 0) return sum;
    return digitalRoot(sum);
};


const output = digitalRoot(94);
console.log(output);