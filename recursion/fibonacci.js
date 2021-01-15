

const fib = n => {
    if(n==0 || n==1) return n;
    return fib(n-1) + fib(n-2);
};

const output = fib(20);
console.log(output);