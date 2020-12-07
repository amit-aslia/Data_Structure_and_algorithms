
const isvalid = str => {
    const obj = {};
    for(let i = 0; i<str.length; i++) {
        obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    }
    const numArr = Object.values(obj)
    const max = Math.max(...numArr)
    let flag = true;
    let countMax = 0;
    let count = 0;
    for(let k = 0; k<numArr.length; k++) {
        if(numArr[k] < max || numArr[k] > max && countMax <= 1) {
            count = count + numArr[k];
        }
    };

    return count > 1 ? 'NO' : 'YES';
}


console.log(isvalid('aabbcccdd'));