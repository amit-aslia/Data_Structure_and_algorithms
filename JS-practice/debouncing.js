
const logData = () => {
  console.log('function called');
}

const debounce = function (fn, delay) {
  let timer; 
  // timer is here, because timer reference will be same for all settimeouts
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
    console.log('this is timer', timer);
  }
}

const betterFunction = debounce(logData, 300);

/*
  function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  }
*/

