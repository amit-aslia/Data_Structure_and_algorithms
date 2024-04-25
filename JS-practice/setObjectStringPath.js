const object = {
  name: "amit",
  address: {
    country: {
      name: "india",
      city: {
        name: "Bahadurgarh",
        village: {
          name: "kherka",
        },
      },
    },
  },
  numbers: [1, 2, 3, 4],
};

// if key name value if not there then make a new object out of it
// if key present then update it

const helper = (object, path, value) => {
  const [current, ...rest] = path;
  const isNumeric = !isNaN(parseInt(rest[0]));

  if (!rest.length) {
    object[current] = value;
  } else {
    if (!object[current]) {
      const nextValue = isNumeric ? [] : {};
      object[current] = helper(nextValue, rest, value);
    } else {
      object[current] = helper(object[current], rest, value);
    }
  }
  return object;
};

const set = (object, path, value) => {
  const result = helper(object, path, value);
  return result;
};

set(object, ["address", "country", "city", "village", "name"], "Kherka Gujjar");
console.log(set(object, ["company", "0"], "tokopedia"));
console.log(set(object, ["numbers", "3"], "tokopedia"));

// console.log(object.address.country);

// const getObject = (obj, path) => {
//   const result = path.reduce((acc, cv) => {
//     if (cv.length > 1) {
//       const newVal = cv.split("");
//       const regex = /^[a-zA-Z]+$|^[1-9][0-9]*$|^0$/;
//       for (const key of newVal) {
//         if (regex.test(key)) {
//           acc = acc[key];
//         }
//       }
//       return acc;
//     } else {
//       acc = acc[cv];
//       return acc;
//     }
//   }, obj);
//   return result;
// };

// console.log(getObject(object, ["b", "c"]));
// console.log(getObject(object, ["a", "0", "b", "c"]));
// console.log(getObject(object, ["a[0]", "b", "c"]));
