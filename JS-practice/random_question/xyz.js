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

function mapLimit(inputs, limit, iterateeFn, callback) {
  const chopped = chop(inputs, limit);
  let finalResult = Promise.resolve([]);

  for (const current of chopped) {
    finalResult = finalResult.then((res) => {
      return new Promise((resolve) => {
        let temp = [];
        let count = 0;

        const processInput = (eachAsync) => {
          iterateeFn(eachAsync, (response) => {
            temp.push(response);
            count++;
            if (count === current.length) resolve([...res, ...temp]);
          });
        };

        current.forEach(processInput);
      });
    });
  }

  finalResult.then((res) => {
    callback(res);
  });
}

// Example usage:
mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log("output", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
