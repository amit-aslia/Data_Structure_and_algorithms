function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const functions = [
  async () => {
    await sleep(2000);
    return 1;
  },
  async () => {
    await sleep(3000);
    return 2;
  },
  async () => {
    await sleep(1000);
    return 3;
  },
  new Promise((resolve) => setTimeout(resolve, 1000, 4)),
  new Promise((resolve) => setTimeout(resolve, 1000, 5)),
];

const chop = (arr, limiter) => {
  let result = [];
  let count = 0;
  while (count < arr.length) {
    result.push(arr.slice(count, count + limiter));
    count = count + limiter;
  }
  return result;
};

const mapLimit = async (fns, limiter, callback) => {
  const choppedArr = chop(fns, limiter);
  let output = [];
  for (const eachChoppedArr of choppedArr) {
    const result = await Promise.all(eachChoppedArr.map(ele => typeof ele === "function" ? ele() : ele));
    output = [...output, ...result];
  }
  callback(output);
};

mapLimit(functions, 2, (result) => {
  console.log("result ->", result);
});
