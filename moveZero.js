const arr = [1, 2, 0, 4, 9, 8, 0];

const moveZero = (arr) => {
  let indexCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (indexCounter === i && arr[i] !== 0) {
      indexCounter++;
    } else if (indexCounter !== i && arr[i] !== 0) {
      arr[indexCounter] = arr[i];
      arr[i] = 0;
      indexCounter++;
    }    
  }
  return arr;
};

console.log(moveZero(arr));
