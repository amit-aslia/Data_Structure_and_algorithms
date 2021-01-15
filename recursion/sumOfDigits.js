

const sumOfDigit = n => {
    if(Math.floor(n/10) == 0) return n;
    return n%10 + sumOfDigit(Math.floor(n/10));
}

const sum = sumOfDigit(43356);
console.log(sum);