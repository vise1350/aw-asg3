function doubleUsingCallback(array, callback) {
  const doubledArray = [];

  for (const element of array) {
    doubledArray.push(callback(element));
  }

  return doubledArray;
}

const array = [1, 2, 3, 4, 5];

const double = (element) => {
  return element * 2;
};

const doubledArray = doubleUsingCallback(array, double);
console.log(doubledArray); // [2, 4, 6, 8, 10]
