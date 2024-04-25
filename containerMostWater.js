const height = [1,8,6,2,5,4,8,3,7];

var maxArea = function(height) {
  let width = 0;
  let omax = 0;
  let cmax = 0;
  let lp = 0;
  let rp = height.length - 1;
  while (lp <= rp) {
      width = rp - lp;
      let minHeight = Math.min(height[lp], height[rp]);
      cmax = minHeight * width;
      if (cmax > omax) {
          omax = cmax;
      }
      if (height[lp] > height[rp]) {
          rp--;
      }
      else {
          lp++;
      }
  }
  return omax;
};

console.log(maxArea(height));

