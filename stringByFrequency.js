const str = "AAabb";

const sortStringByFreq = (str) => {
  const hmp = {};

  for (let i = 0; i < str.length; i++) {
    hmp[str[i]] = hmp[str[i]] ? hmp[str[i]] + 1 : 1;
  }

  const sortedObject = Object.entries(hmp).sort((a, b) => b[1] - a[1]);
  const result = sortedObject.reduce((acc, cv) => {
    const str = cv[0].repeat(cv[1]);
    return acc.concat(str);
  }, "");

  return result;
};

console.log(sortStringByFreq(str));
