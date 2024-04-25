const highlightWord = (str, keyword, isCaseSensitive = true) => {
  if (isCaseSensitive) {
    keyword = keyword.map(e => e.toLowerCase());
  }
  const uniqueWords = new Set(keyword);
  const words = str.split(" ");

  const hasWord = word => {
    word = isCaseSensitive ? word.toLowerCase() : word;
    return uniqueWords.has(word)
  };

  const result = words.map((word) => {
    let output = "";
    if (hasWord(word)) {
      output = `<strong>${word}}</strong>`;
    } else {
      for (let i = 0; i < word.length; i++) {
        const prefix = word.slice(0, i + 1);
        const suffix = word.slice(i + 1);
        if (hasWord(prefix) && hasWord(suffix)) {
          output = `<strong>${prefix + suffix}</strong>`;
        } else if (hasWord(prefix) && !hasWord(suffix)) {
          output = `<strong>${prefix}</strong>${suffix}`;
        } else if (!hasWord(prefix) && hasWord(suffix)) {
          output = `${prefix}<strong>${suffix}</strong>`;
        }
      }
    }
    return output ? output : word;
  });
  return result.join(" ");
};

const str = "Ultimate JavaScript / Frontend Guide.";
const words = ["Front", "End", "JavaScript"];

console.log(highlightWord(str, words));
