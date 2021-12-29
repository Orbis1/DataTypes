'use strict';

// const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = (arr) => {
  const types = {};
  for (const a of arr) {
    const type = typeof a;
    types[type] === undefined ? types[type] = 1 : types[type] += 1;
  }
  return types;
};

module.exports = { countTypesInArray };
