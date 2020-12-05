
const nonPrime = { 1: '1', 4: '4', 6: '6', 8: '8', 9: '9' }

const checkPrime = n => {
  let flag = false;
  for(let i = 2; i<=n/2; i++)
  {
    if(n % i == 0) {
      flag = true;
      break;
    };
  }
  return !flag;
}

const megaPrime = (min, max) => {
  let count = 0;
  const init = min % 2 == 0 ? min + 1 : min;
  for(let i = init; i<=max; i = i + 2) {
    let checkMegaPrime = false;
    let numStr = i.toString();
    let j = 0;
    while (j < numStr.length) {

      if(nonPrime[numStr[j]]) {
        checkMegaPrime = true;
        break;
      }
      j++;
    }
    if(checkMegaPrime == true) {
      continue;
    }
    else {
      if(checkPrime(i)) {
        console.log(i)
        checkMegaPrime ? count : count++;
        }
    }

    
  }
  return count + 1;
};


const min = 1;
const max = 1000;
const totalNumber = megaPrime(min, max);
console.log(totalNumber);