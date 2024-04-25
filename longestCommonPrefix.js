
const longestCommonPrefix = str => {
  let maxlenWord = 0;
  let finalPrefix = '';
  for (let i = 0; i < str.length; i++) {
    maxlenWord = Math.max(str[i].length, maxlenWord);
  }

  for (let i = 0; i < maxlenWord; i++) {
    const matchStr = str[0][i] || '';
    for (let j = 0; j < str.length; j++) {
      if (str[j][i] !== matchStr) {
        return finalPrefix;
      } 
    }
    finalPrefix = finalPrefix.concat(str[0][i]);
  }
  return finalPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));