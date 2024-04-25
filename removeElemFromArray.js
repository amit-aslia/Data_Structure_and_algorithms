var removeElement = function (nums, val) {
  let j = 0;
      for( let n of nums )if( n !== val ) nums[j++] = n
      console.log(nums)
      return j
  };

console.log(removeElement([3, 2, 2, 3], 3));
