const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("gfg1");
  }, 1000);
});

const prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("error");
  }, 2000);
});

const prom3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg2");
  }, 3000);
});

const prom4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg3");
  }, 3000);
});

const myAny = function(promises) {
  const rejectedPromises = [];
  const promise = new Promise((resolve, reject) => {
    promises.forEach((eachPromise, index) => {
      Promise.resolve(eachPromise).then(res => {
        resolve(res);
      }).catch(err => {
        if (promises.length === index + 1) {
          reject(rejectedPromises);
        }
        rejectedPromises[index] = err;
      })
    })
  });
  return promise;
};

myAny([prom1, prom2]).then(res => {
  console.log(res)
}).catch(err => {
  console.log('All promises are rejected', err);
})