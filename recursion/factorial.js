
const factorial = n => {
    if(n === 0) return 1;
    return n * factorial(n-1);
};

const output = factorial(5);

console.log(output);