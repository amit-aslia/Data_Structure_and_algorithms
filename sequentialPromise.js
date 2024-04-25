const arr = [
  {
    f: function () {
      console.log("f1");
    },
    t: 1000,
  },
  {
    f: function () {
      console.log("f2");
    },
    t: 2000,
  },
  {
    f: function () {
      console.log("f3");
    },
    t: 3000,
  },
  {
    f: function () {
      console.log("f4");
    },
    t: 4000,
  },
  {
    f: function () {
      console.log("f5");
    },
    t: 5000,
  },
];

const callFuction = (arr, num) => {
  let index = num;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const d = new Date();
      const n = d.toLocaleTimeString();
      console.log("time:", n);
      arr[index].f();
      index++;
      resolve();
    }, arr[index].t);
  });
  promise.then(() => {
    if (index === arr.length) {
      console.log('all function execution is completed');
      return;
    }
    callFuction(arr, index);
  });
};

callFuction(arr, 0);
