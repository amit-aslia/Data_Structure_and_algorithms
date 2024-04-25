const object = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  g: {
    h: {
      e: (a,b,c) => a + b * c,
    }
  },
  d: (a, b, c) => a - b - c,
};

const readFullObject = (data, ...args) => {
  const result = Object.keys(data).reduce((acc, cv) => {
    if (typeof data[cv] === "function") {
      return { ...acc, [cv]: data[cv](...args) };
    }
    if (typeof data[cv] === "object") {
      return { ...acc, [cv]: readFullObject(data[cv], ...args) };
    }

    return { ...acc, [cv]: data[cv] };
  }, {});
  return result;
};

const pipeResult = (object) => {
  return function (...args) {
    const result = readFullObject(object, ...args);
    console.log(result);
  };
};

pipeResult(object)(1, 2, 3);
