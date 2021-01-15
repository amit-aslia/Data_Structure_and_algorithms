const checkPallindrome = (str, i , j) => {
    while(i <= j) {
        if(str[i] != str[j]) return 'Not pallindrome'
        i++;
        j--
    }
    return 'Pallindrome'
}

const str = checkPallindrome('abcdcba', 0, 6);
console.log(str);

const recursive = (str, i, j) => {
    console.log('Function called');
    if(i >= j) return 'Pallindrome';
    if(str[i] != str[j]) return 'Not Pallindrome';
    return recursive(str, i+1, j -1);
};

const s = ''
console.log(recursive(s,0,s.length - 1));