const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg1");
  }, 1000);
});

const prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("error");
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

// const myAll = function (promises) {
//   const result = [];
//   let total = 0;
//   const promise = new Promise(function (resolve, reject) {
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise).then(response => {
//         result[index] = response;
//         total++;
//         if (total === promises.length) {
//           resolve(result);
//         }
//       }).catch(err => {
//         reject(err)
//       })
//     });
//   });
//   return promise;
// };


// myAll([prom1, prom2, prom3, prom4]).then(res => console.log(res)).catch(err => console.log(err));


const myPromise = function(promises) {
  // return promises;
  const result = [];
  let total = 0;
  const promiseResult = new Promise((resolve, reject) => {
    promises.forEach((eachPromise, index) => {
      Promise.resolve(eachPromise).then(res => {
        result[index] = res;
        total++;
        if (total === promises.length) resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  });
  return promiseResult;
};

myPromise([prom1, prom2, prom3, prom4]).then(res => console.log(res)).catch(err => console.log(err));
