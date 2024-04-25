
// const sum = (arr) => arr.reduce((acc, cv) => acc + cv, 0);

// const add = function(...a) {
//   return function innerSum(...b) {
//     if (b.length) {
//       return add (sum(a) + sum(b));
//     }
//     return sum(a);
//   }
// }

// console.log(add(1)(2)());
// console.log(add(1, 2)(3)());
// console.log(add(1)(2)(3)() == 6);
// console.log(add(1)(2)() + 3);


function add(...x){
  // store the current arguments
  let sum = x;

  function resultFn(...y){
      // merge the new arguments
      sum = [...sum, ...y];
      return resultFn;
  }
  
  // override the valueOf to return sum
  resultFn.valueOf = function(){
    return sum.reduce((a, b) => a + b, 0);
  };
  
  // extend the valueOf
  resultFn.value = resultFn.valueOf;
  
  // return the inner function
  // on any primitive action .valueOf will be invoked
  // and it will return the value
  return resultFn;
}

console.log(add(1)(2).value() == 3); 
console.log(add(1, 2)(3).value() == 6); 
console.log(add(1)(2)(3).value() == 6); 
console.log(add(1)(2) + 3);