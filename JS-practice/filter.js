/*
  const arr = [1,2,3,4,5,6];
  const oddNumber = arr.filter(callback);

  const callback = (elem, index) => {
    return elem % 2 !== 0;
  }

*/



const arr = [1,2,3,4,5,6,7,8];

Array.prototype.myFilter = function(callback) {
  const arr = this;
  const result = [];
  arr.forEach((elem, index) => {
    if (callback(elem, index, arr)) {
      result.push(elem);
    }
  });
  return result;
}

const callback = (elem, index) => {
  return elem % 2 !== 0;
}

const oddNum = arr.myFilter(callback);
console.log(oddNum);