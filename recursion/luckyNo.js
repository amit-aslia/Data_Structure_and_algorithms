let counter = 2;


const isLucky = n => {
    if(n < counter) return 1;
    if(n%counter == 0) return 0;
    let np = n;
    np = np - np/counter;
    counter++;
    return isLucky(np);
};

const output = isLucky(2);
console.log(output);