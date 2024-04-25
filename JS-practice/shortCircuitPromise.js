const makePromise = () => {
  let count = 1;
  return function (limiter) {
    return new Promise((resolve, reject) => {
      console.log('Calling promise again', count)
      if (count > limiter) {
        resolve("api success");
      } else {
        console.log('Promise rejected');
        count++;
        reject("error occured");
      }
    });
  };
};

const fetchCall = () => {
  let count = 1;
  return async function (promiseCall, limiter) {
    if (count > limiter) {
      const error = await Promise.reject(promiseCall);
      return error;
    } else {
      try {
        const data = await Promise.resolve(promiseCall);
        return data;
      } catch (err) {
        count++;
        return false;
      }
    }
  };
};

const callCustomPromise = async (limiter) => {
  const customFetch = fetchCall();
  const createPromise = makePromise();
  const execute = async () => {
    const data = await customFetch(createPromise(5), limiter);
    if (!data) {
      return execute();
    }
    return data;
  };
  try {
    const result = await execute();
    return result;
  } catch (err) {
    return err;
  }
};

callCustomPromise(6)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
