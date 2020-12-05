const loveLetterMystery = str => {
    let counter = 0;
    let firstIndex = 0;
    let lastIndex = str.length - 1;
    while(firstIndex < lastIndex) {
        let firstCharacterAscii = str.charCodeAt(firstIndex);
        let lastCharacterAscii = str.charCodeAt(lastIndex);
        if(firstCharacterAscii != 97 || lastCharacterAscii != 97) {
            counter = counter +  Math.abs(firstCharacterAscii - lastCharacterAscii)
        }
        firstIndex++;
        lastIndex--;
    };
    return counter;
};


const str = 'abcd';
console.log(loveLetterMystery(str));