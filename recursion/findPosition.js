

const findPosition = n => {
    if(n <= 1) return 1;
    return (findPosition(Math.floor(n/2)) * 2);
}

const output = findPosition(13);
console.log(output)

console.log(Math.floor(Math.log(8)));