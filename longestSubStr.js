const str = "bbbb";

const longestSubStr = (s) => {
  let mpp = {};
  let left = 0;
  let right = 0;
  let len = 0;
  while (right < s.length) {
    if (mpp[s[right]]) {
      left = Math.max(mpp[s[right]] + 1, left);
    }
    mpp[s[right]] = right; // b = 0 
    len = Math.max(right - left + 1, len);
    console.log({ left, right, len }, mpp);
    right++;
  }
  return len;
};

console.log(longestSubStr(str));
