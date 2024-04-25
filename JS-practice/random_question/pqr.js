function getNameById(id, callback) {
  // simulating async request
  let randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

const chop = (input, limit) => {
  let i = 0;
  let results = [];

  while (i < input.length) {
    results.push(input.slice(i, i + limit));
    i = i + limit;
  }

  return results;
};

const mapLimit = (arr, limiter, iterateeFn, callback) => {
  const choppedArray = chop(arr, limiter);
  let result = [];

  const callAllAsyncFunction = (index) => {
    if (choppedArray.length === index) {
      callback(result);
      return;
    }

    let current = choppedArray[index];
    let temp = [];
    let count = 0;
    const executeFns = (eachFn) => {
      iterateeFn(eachFn, (res) => {
        temp.push(res);
        count++;
        if (count === current.length) {
          result = [...result, ...temp];
          callAllAsyncFunction(index + 1);
        }
      });
    };
    current.forEach(executeFns);
  };

  callAllAsyncFunction(0);
};

// Example usage:
mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log("output", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
