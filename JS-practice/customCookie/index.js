const parsedCookieValue = (val) => {
  const [nameValue, ...rest] = val.split(";");

  const [key, value] = nameValue.split(":");
  const options = {};
  for (const keyValue of rest) {
    const [key, value] = keyValue.split("=");
    options[key] = value;
  }
  return {
    key,
    value,
    options,
  };
};

function useCustomCookie() {
  const store = new Map();

  Object.defineProperty(document, "myCookie", {
    configurable: true,

    get() {
      let currentTime = Date.now();
      let cookies = [];

      store.forEach(({ value, expire }, key) => {
        if (expire < currentTime) {
          // delete that entry
          store.delete(key);
        } else {
          cookies.push(`${key}:${value}`);
        }
      });
      return cookies.join(";");
    },

    set(val) {
      const { key, value, options } = parsedCookieValue(val);

      let expire = Infinity;
      if (options["max-age"]) {
        expire = Date.now() + Number(options["max-age"]) * 1000;
      }

      store.set(key, { value, expire });
    },
  });
}

useCustomCookie();
document.myCookie = "name:amit;max-age=1;path=/;httpOnly=false";
document.myCookie = "id:five;max-age=5;path=/;httpOnly=false";
console.log(document.myCookie);

setTimeout(() => {
  console.log(document.myCookie);
}, 1500);
