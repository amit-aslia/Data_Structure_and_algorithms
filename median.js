var findMedianSortedArrays = function (nums1, nums2) {
  let newArray = [];
  let k = 0;
  let m = 0;
  let l = nums1.length;
  let n = nums2.length;
  while (k < l && m < n) {
    if (nums1[k] < nums2[m]) {
      newArray.push(nums1[k]);
      k++;
    } else {
      newArray.push(nums2[m]);
      m++;
    }
  }

  if (k < l) {
    // copy 1st array to new Array
    while (k < l) {
      newArray.push(nums1[k]);
      k++;
    }
  }
  if (m < n) {
    // copy 2nd array to new Array
    while (m < n) {
      newArray.push(nums2[m]);
      m++;
    }
  }
  console.log(newArray);
  let newArrayLastIndex = newArray.length - 1;
  if (newArrayLastIndex % 2 === 0) {
    return newArray[newArrayLastIndex / 2];
  } else {
    let n1 = Math.ceil(newArrayLastIndex / 2);
    let n2 = Math.floor(newArrayLastIndex / 2);
    console.log(n1, n2)
    return (newArray[n1] + newArray[n2]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
