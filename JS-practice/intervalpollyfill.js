const myInterval = function () {
  const intervalId = Math.random();
  let mapIds = {};
  function customInterval(callback, timer, ...args) {
    function repeat() {
      mapIds[intervalId] = setTimeout(() => {
        callback(...args);
        if (mapIds[intervalId]) {
          repeat();
        }
      }, timer);
    }
    repeat();
    return intervalId;
  }

  const customClearInterval = function (intervalId) {
    clearTimeout(intervalId);
    delete mapIds[intervalId];
  };
  return {
    customClearInterval,
    customInterval,
  };
};

const { customInterval, customClearInterval } = myInterval();
let count = 0;
let x;
const greet = (name) => {
  count++;
  console.log("hello", name, count);
  if (count === 3) {
    customClearInterval(x);
  }
};

x = customInterval(greet, 1000, "amit");

