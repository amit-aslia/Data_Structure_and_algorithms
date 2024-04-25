const promiseFn = () => {
  let count = 0;
  return () => {
    return new Promise((resolve, reject) => {
      count++;
      if (count > 5) {
        setTimeout(resolve, 2000, "resolved");
      } else {
        setTimeout(reject, 2000, "rejected");
      }
    });
  };
};

const retry = async (asyncFn, retries, delay, finalError) => {
  try {
    const data = await asyncFn();
    return data;
  } catch (err) {
    if (retries <= 0) {
      return Promise.reject(finalError);
    }
    return retry(asyncFn, retries - 1, delay, finalError);
  }
};

retry(promiseFn(), 5, 50, "Failed")
  .then((res) => console.log("this is res", res))
  .catch((err) => console.log("this is err", err));
