export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomArrayItems = (array, count) => {
  const newArray = [];
  const copyArray = array.slice(0, array.length);

  for (let i = 0; i < count; i++) {
    const el = copyArray.splice(getRandomInt(0, copyArray.length), 1);
    newArray.push(el[0]);
  }

  if (count === 1) {
    return newArray[0];
  } else {
    return newArray;
  }
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
