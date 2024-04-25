let data = {
  name: "one",
  sName: "two",
  x: () => 2,
  address: {
    city: "one",
    place: {
      b: "amit",
      places: {
        city: "jaipur",
      },
    },
  },
};

const obj1 = {
  company: 'tokopedia',
}

const deepCopy = (data, obj1) => {
  return Object.keys(data).reduce((acc, cv) => {
    if (typeof data[cv] === "object") {
      return { ...acc, [cv]: deepCopy(data[cv]) };
    }
    return { ...acc, [cv]: data[cv] };
  }, obj1);
};

const result = deepCopy(data, obj1);
console.log(result);

