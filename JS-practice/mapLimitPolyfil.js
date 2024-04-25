// Implement mapLimit, which is a utility function that produces a list of outputs by mapping each input through an asynchronous iteratee function. The provided limit dictates how many operations can occur at once.

// Inputs
// inputs: An array of inputs.
// limit: The maximum number of operations at any one time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
//      input: The input being processed.
//      callback: A function that will be called when the input is finished processing. It will be provided one argument, the processed output.
// callback: A function that should be called with the array of outputs once all the inputs have been processed.

// [1, 2, 3, 4, 5]
// [[1, 2], [3, 4], [5]]
// inputs in a single batch can be processed concurrently / parallely -> async in parallel
// each batch will be processed sequentially -> async in sequence

function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

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
  const finalResult = chopped.reduce((prev, current) => {
    return prev.then((res) => {
      return new Promise((resolve) => {
        let temp = [];
        current.forEach((eachAsync) => {
          iterateeFn(eachAsync, (response) => {
            temp.push(response);
            if (temp.length === current.length) resolve([...res, ...temp]);
          });
        });
      });
    });
  }, Promise.resolve([]));
  finalResult.then((res) => {
    callback(res);
  });
}
//example:
mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log("output", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
