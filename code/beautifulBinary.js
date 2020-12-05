
const beautifulString = str => {
    let i = 0;
    let counter = 0;
    while(i<str.length - 2) {
        if(str[i] == '0') {
            if(str[i + 1]  == '1' && str[i + 2] == '0') {
                counter++;
                i = i + 3;
            }
            else {
                i++;
            }
        }
        else {
            i++
        }
    }
    return counter;
};

const str  = '0101010'
console.log(beautifulString(str))