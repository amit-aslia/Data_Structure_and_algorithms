function timeNow() {
  var d = new Date(); // for now
  const h = d.getHours(); // => 9
  const m = d.getMinutes(); // =>  30
  const s = d.getSeconds(); // => 51
  return `${h}:${m}:${s}`;
}

const executeInParallel = (tasks, callback) => {
  const intitalTime = timeNow();
  console.log(intitalTime);
  const result = [];
  let taskCompleted = 0;

  tasks.forEach((asynFn) => {
    asynFn((val) => {
      result.push(val);
      taskCompleted++;
      if (taskCompleted >= tasks.length) {
        callback(result);
      }
    });
  });
};
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

executeInParallel(
  [createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask()],
  (result) => {
    const intitalTime = timeNow();
    console.log(intitalTime);
    console.log("result", result);
  }
);
