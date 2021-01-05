
// FInd out 15 is present or not

const arr = [1,2,3,2,5,4,-3,12,-23,15,20];
const el = 150;
let flag = false;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === el) {
      console.log(`Element is present at ${i} index`);
      flag = true;
      break;
    } 
}
if(!flag) {
    console.log('Ekement not found')
}