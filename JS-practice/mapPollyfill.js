const arr1 = [1, 2, 3, 4, 5];

const doubleArr1 = arr1.map((data) => data * 2);

// console.log(doubleArr1);

// map takes an callback

const tripleArr1 = (elem) => elem * 3;

Array.prototype.myMap = function (callback) {
  const arr = this;
  const x = [];
  arr.forEach((elem, index) => {
    x.push(callback(elem, index, arr));
  });
  return x;
};

console.log(arr1.myMap(tripleArr1));