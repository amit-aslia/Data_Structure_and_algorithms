const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
  { name: "Samlan", id: "4" },
];

const filterObject = (arr, filterValue) => {
  if (typeof filterValue === "number") return arr[filterValue];
  else if (typeof filterValue === "string") {
    let result = [];
    for (const entry of arr) {
      const keys = Object.keys(entry);
      for (const key of keys) {
        if (entry[key] == filterValue) {
          result.push(entry);
          break;
        }
      }
    }
    return result.length === 1 ? result[0] : result;
  } 
  return undefined;
};

console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "Samlan")); // { name: "Amir", id: "1" }
// console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }
