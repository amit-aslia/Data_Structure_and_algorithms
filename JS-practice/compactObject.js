// My solution

// const compactObj = (obj) => {
//   const result = Object.keys(obj).reduce((acc, cv) => {
//     if (!Boolean(obj[cv])) {
//       return acc;
//     } else if (Array.isArray(obj[cv])) {
//       acc = { ...acc, [cv]: compactArray(obj[cv]) };
//       return acc;
//     } else if (typeof obj[cv] === "object") {
//       acc = { ...acc, [cv]: compactObj(obj[cv]) };
//       return acc;
//     } else {
//       acc = { ...acc, [cv]: obj[cv] };
//       return acc;
//     }
//   }, {});
//   return result;
// };

// const compactArray = (obj) => {
//   return obj.reduce((acc, cv) => {
//     if (!Boolean(cv)) {
//       return acc;
//     } else if (Array.isArray(cv)) {
//       acc = [...acc, compactArray(cv)];
//       return acc;
//     } else if (typeof cv === "object") {
//       acc = [...acc, compactObj(cv)];
//       return acc;
//     } else if (Boolean(cv)) {
//       return (acc = [...acc, cv]);
//     }
//     return acc;
//   }, []);
// };

// const compactObject = (obj) => {
//   if (Array.isArray(obj)) {
//     return compactArray(obj);
//   }
//   if (typeof obj === "object") {
//     return compactObj(obj);
//   }
//   return obj;
// };

const obj = [null, 0, 5, [0], [false, 16]];

var compactObject = function (obj) {
  // These three if statements deal with when obj is not an iterable object
  // Steps 1-3 as described above
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  // This for loop deals with when obj is an iterable object
  // Steps 4-5 as described above
  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (value) compacted[key] = value;
  }

  return compacted;
};

console.log(compactObject(obj));

// console.log("output", compactObject(obj));
