const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3], [2,3,4,5,6]]];

const output = [];

const flatArray = (inputArray, depth = 1, output = []) => {
  if (depth <= 0) {
    output.push(inputArray);
    return output;
  } else {
    inputArray.forEach((elem) => {
      if (Array.isArray(elem)) {
        flatArray(elem, depth - 1, output);
      } else {
        output.push(elem)
      }
    })
  }
  return output;
};

const data = flatArray(arr, 2);
console.log(data);


