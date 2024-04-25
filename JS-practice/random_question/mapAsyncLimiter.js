function getNameById(id, callback) {
  // simulating async request
  let randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

const chop = (arr, limiter) => {
  const newArr = [];
  let count = 0;
  while (count < arr.length) {
    newArr.push(arr.slice(count, count + limiter));
    count = count + limiter;
  }
  return newArr;
};

const mapLimit = (arr, limiter, interteFn, callback) => {
  const choppedArr = chop(arr, limiter);
  let result = [];

  const processBatch = (index) => {
    const current = choppedArr[index];
    let temp = [];
    let count = 0;

    if (index === choppedArr.length) {
      callback(result);
      return;
    }

    const executeAsyncFns = (eachFns) => {
      interteFn(eachFns, (res) => {
        temp.push(res);
        count++;
        if (count === current.length) {
          result = [...result, ...temp];
          processBatch(index + 1);
        }
      });
    };

    current.forEach(executeAsyncFns);
  };
  processBatch(0);
};

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (result) => {
  console.log("this is result", result);
});
