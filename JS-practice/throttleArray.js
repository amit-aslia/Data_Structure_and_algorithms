function getCurrentTime() {
  const now = new Date();
  
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
}

const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = 5;

/*
Implement a throttler that executes an array of tasks.
When the throttler is passed a number, only executes that number of the tasks and passes the other tasks into a queue.
  three args
  task count and timer
*/

// 10 -> 6, 0 - 6 -> count = 6 -> // 13

const getTask = (task, count, cnt) => {
  let result = [];
  let tracker = count;
  for (let i = 0; i < cnt; i++) {
    if (tracker >= task.length) tracker = tracker % task.length;
    result.push(task[tracker]);
    tracker+=1;
  }
  return result;
};

const betterThrottle = function () {
  let timer = 0;
  let count = 0;
  return function (task, cnt, delay) {
    setTimeout(function () {
      const result = getTask(task, count, cnt);
      count = count + cnt;
      console.log(result, getCurrentTime());
      return result;
    }, timer);
    timer = timer + delay;
  };
};

const throttle = betterThrottle();

throttle(task, count, 2000); // [1, 2, 3, 4, 5] // immediately
throttle(task, count, 2000); // [6, 7, 8, 9, 10] // after 2 seconds
throttle(task, count, 2000);