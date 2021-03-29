const str = 'aabaacaadaabaaabaa';
const pat = 'aaba';

checkPattern = (str, pat) => {
  console.log(str.includes(pat));
}

const output = checkPattern(str, pat);
console.log(output);