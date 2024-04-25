const arr1 = [1,2,3,4,5,6];

// const sum = arr1.reduce((acc, cv) => {
//   console.log(acc, cv);
//   return acc + cv;
// }, 0);

// console.log(sum);

const sumCallback = (cv, acc) => acc + cv;

Array.prototype.myReduce = function(callback, value) {
  const arr = this;
  let accumlator = value;
  arr.forEach((elem, index) => {
   if (accumlator) {
    accumlator = callback.call(undefined, accumlator, elem, this);
   } else accumlator = elem
  });

  return accumlator;
}

const value = arr1.myReduce(sumCallback, 0);
console.log(value);