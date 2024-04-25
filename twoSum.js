const twoSum = function (nums, target) {
  let newArray = [...nums];
  newArray = newArray.sort((a, b) => a - b);
  let arr = [];
  let pointerLeft = 0;
  let pointerRight = newArray.length - 1;
  while (pointerLeft <= pointerRight) {
    const sum = newArray[pointerLeft] + newArray[pointerRight];
    if (sum === target) {
      arr.push(newArray[pointerLeft], newArray[pointerRight]);
      break;
    } else if (sum < target) {
      pointerLeft++;
    } else {
      pointerRight--;
    }
  }

  if (arr.length) {
    const [firstNumber, secondNumber] = arr;
    const index1 = nums.findIndex((num) => {
      return num === firstNumber;
    });
    nums[index1] = ''; 
    const index2 = nums.findIndex((num) => {
      return num === secondNumber;
    });
    return [index1, index2];
  }
};

console.log(twoSum([3,3], 6));
