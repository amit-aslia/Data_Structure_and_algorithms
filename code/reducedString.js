
const superReducedString = s => {
    while(s.length) {
        flag = false;
        for(let i = 0; i<s.length; i = i + 1) {
            if(s[i] === s[i + 1]) {
                s = s.slice(0, i) + s.slice(i + 2);
                flag = true;
            }
        }
        if(!flag) return s;
    }
    return s;
};


const str = 'abba';
const string = superReducedString(str);
console.log(string);