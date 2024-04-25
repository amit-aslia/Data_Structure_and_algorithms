const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("gfg1");
  }, 1000);
});

const prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("error");
  }, 1000);
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

const myRace = function(promises) {
  const promise = new Promise((resolve, reject) => {
    promises.forEach((eachPromise, index) => {
      Promise.resolve(eachPromise).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err);
      })
    })
  })
  return promise;
}

myRace([prom1, prom2]).then(res => console.log(res)).catch(err => console.log(err));