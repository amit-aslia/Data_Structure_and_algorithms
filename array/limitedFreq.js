
// TIP: whenever you are doing such type of question:
// if value if getting bigger to n do %n to handle

const limitedFreq = (arr,n) => {
  for (let j =0; j < n; j++)
  arr[j] = arr[j]-1;

  for (let i=0; i < n; i++) {
    arr[arr[i]%n] = (arr[arr[i]%n] + n);
  }

  for (let i =0; i < n; i++)
    console.log(Math.floor( arr[i]/n))
};


const arr = [2,3,2,3,5];
const output = limitedFreq(arr,arr.length);
// console.log(output);

const frequencycount = (arr,n) => {
  const obj = {};
  for(let i = 0; i< n; i++) {
    obj[i+1] = 0;
  }
  for(let i=0; i<n; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1; 
  }
  for(let i = 0; i<n; i++) {
    arr[i] = obj[i+1]
  }
  return arr;
  }

const secondArr = [2,3,2,3,5];
const secondOutput = frequencycount(secondArr, arr.length);

console.log(secondOutput);
