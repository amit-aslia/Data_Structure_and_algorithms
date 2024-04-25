const logData = () => {
  console.log("api called");
};

const throttling = function (fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      flag = false;
      setTimeout(() => {
        logData();
        flag = true;
      }, delay);
    }
  };
};

const betterFunction = throttling(logData, 300);
