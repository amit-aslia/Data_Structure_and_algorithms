const wave = arr => {
  for(let i = 0; i < arr.length; i+=2) {
    if(arr[i+1] == undefined) continue;
    else {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
  }
  return arr;
};

const arr = [1,2,3,4,5];

const output = wave(arr);
console.log(output);