const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = 2;

const betterFn = () => {
  let count = 0;
  let timer = 0;
  return function (task, counter, delay) {
      setTimeout(() => {
        const updatedTask = task.slice(count, count + counter);
        count = count + counter;
        if (count >= task.length) {
          count = count % task.length;
        }
        console.log(updatedTask);
      }, timer);
      timer = timer + delay;
  };
};

const throttle = betterFn();

throttle(task, count, 2000); // [1, 2, 3, 4, 5] // immediately
throttle(task, count, 2000); // [6, 7, 8, 9, 10] // after 2 seconds
throttle(task, count, 2000); // [1, 2, 3, 4, 5] // after 2 seconds
