const myMap = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[result.length] = callback(arr[i], i, arr);
  }
  return result;
};

const myFilter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result[result.length] = arr[i];
    }
  }
  return result;
};

const myReduce = (arr, callback, initialValue) => {
  let acc = initialValue;
  let start = 0;

  if (acc === undefined) {
    acc = arr[0];
    start = 1;
  }

  for (let i = start; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
};

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};

const myEvery = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

const mySome = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

const myFlat = (arr, depth = 1) => {
  const result = [];

  const flatten = (array, d) => {
    for (let i = 0; i < array.length; i++) {
      const value = array[i];

      if (Array.isArray(value) && d > 0) {
        flatten(value, d - 1);
      } else {
        result[result.length] = value;
      }
    }
  };

  flatten(arr, depth);
  return result;
};
