function PromisePolyfil(executor) {
  // write polyfil code here

  let onResolve,
    onReject,
    isFullFilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(value);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFullFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  executor(resolve, reject);
}

const examplePromise = new PromisePolyfil((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

examplePromise
  .then((res) => {
    return res;
  })
  .then((res) => res)
  .then((res) => console.log("res", res))
  .catch((err) => console.log(err));
