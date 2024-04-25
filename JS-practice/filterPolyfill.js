const arr1 = [1,2,3,4,5,6,7,8,9,0];

const findOdds = arr1.filter(elem => elem % 2 !== 0);

// console.log(findOdds);

const findEven = (elem) => elem % 2;

Array.prototype.myFilter = function (callback) {
  const arr = this;
  let newArr = [];
  arr.forEach((elem, index) => {
    if (callback(elem, index, arr)) {
      newArr.push(elem);
    }
  });
  return newArr;
}

console.log(arr1.myFilter(findEven));