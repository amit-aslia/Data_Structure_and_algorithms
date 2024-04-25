// const getCurrentTime = () => {
//   const date = new Date();
//   const r = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//   console.log("console", r);
//   return r;
// };

// const p1 = new Promise((resolve) => setTimeout(resolve, 10000, "amit"));
// const p2 = new Promise((resolve) => setTimeout(resolve, 5000, "aslia"));

// const delayOfSeconds = (val, timer) =>
//   new Promise((resolve) => setTimeout(resolve, timer * 1000, val));

// const check = async () => {
//   console.log("start");
//   getCurrentTime();
//   const r1 = await delayOfSeconds("amit", 10);
//   console.log(r1, getCurrentTime());
//   const r2 = await delayOfSeconds("aslia", 5);
//   console.log(r2, getCurrentTime());
// };

// check();

// const check2 = async () => {
//   console.log("start");
//   getCurrentTime();
//   const r1 = await p1;
//   console.log(r1, getCurrentTime());
//   const r2 = await p2;
//   console.log(r2, getCurrentTime());
// };

// check2();

// const delayOfSeconds = (val, timer) =>
//   new Promise((resolve) => setTimeout(resolve, timer * 1000, val));

// const p1 = new Promise((resolve) => setTimeout(resolve, 1 * 1000, 'amit'));
// const p2 = new Promise((resolve) => setTimeout(resolve, 3 * 1000, 'aslia'));

// const addValues = async (x) => {
//   const a1 = await p1;
//   console.log(a1);
//   const a2 = await p2;
//   console.log(a2);
//   return x + a1 + a2;
// };

// addValues(10).then((res) => console.log(res));

// // addValues(10).then((res) => console.log(res));

// // const hello = async (name) => {
// //   console.log(name, "first line");
// //   await console.log(name, "second line");
// //   console.log(name, "third line");
// //   await console.log(name, "forth line");
// //   console.log(name, "fifth line");
// // };

// // // const fun = async () => {
// // //   return 'amit';
// // // };

// // // console.log(fun());
// // // console.log('done end');

// // function resolveAfter2Seconds() {
// //   console.log("starting slow promise");
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve("slow");
// //       console.log("slow promise is done");
// //     }, 2000);
// //   });
// // }

// // function resolveAfter1Second() {
// //   console.log("starting fast promise");
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve("fast");
// //       console.log("fast promise is done");
// //     }, 1000);
// //   });
// // }

// // async function sequentialStart() {
// //   console.log("== sequentialStart starts ==");

// //   // 1. Start a timer, log after it's done
// //   const slow = resolveAfter2Seconds();
// //   console.log(await slow);

// //   // 2. Start the next timer after waiting for the previous one
// //   const fast = resolveAfter1Second();
// //   console.log(await fast);

// //   console.log("== sequentialStart done ==");
// // }

// // async function sequentialWait() {
// //   console.log("== sequentialWait starts ==");

// //   // 1. Start two timers without waiting for each other
// //   const slow = resolveAfter2Seconds();
// //   const fast = resolveAfter1Second();

// //   // 2. Wait for the slow timer to complete, and then log the result
// //   console.log(await slow);
// //   // 3. Wait for the fast timer to complete, and then log the result
// //   console.log(await fast);

// //   console.log("== sequentialWait done ==");
// // }

// // async function concurrent1() {
// //   console.log("== concurrent1 starts ==");

// //   // 1. Start two timers concurrently and wait for both to complete
// //   const results = await Promise.all([
// //     resolveAfter2Seconds(),
// //     resolveAfter1Second(),
// //   ]);
// //   // 2. Log the results together
// //   console.log(results[0]);
// //   console.log(results[1]);

// //   console.log("== concurrent1 done ==");
// // }

// // async function concurrent2() {
// //   console.log("== concurrent2 starts ==");

// //   // 1. Start two timers concurrently, log immediately after each one is done
// //   await Promise.all([
// //     (async () => console.log(await resolveAfter2Seconds()))(),
// //     (async () => console.log(await resolveAfter1Second()))(),
// //   ]);
// //   console.log("== concurrent2 done ==");
// // }

// // sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// // // wait above to finish
// // setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// // // wait again
// // setTimeout(concurrent1, 7000); // same as sequentialWait

// // // wait again
// // setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"

// // setTimeout(() => {
// //   console.log("hi");
// // }, 0);
// // async function greet(name) {
// //   console.log("first", name);
// //   await console.log("middle", name);
// //   console.log("last", name);
// // }
// // greet("sachin");
// // greet("rahul");
// // console.log("end");

// // const normal = async () => {
// //   return 2;
// // };

// // normal();
// // console.log("normal");
// // console.log(normal);

const obj = {
  name: "amit",
  grad: "hell",
};

// obj.gender = 'male';

// Object.defineProperty(obj, 'address', {
//   value: 'kherka'
// });

// // obj.address = 'Noida'

// Object.keys(obj).forEach(item => {
//   // console.log(item);
// });

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(clone))