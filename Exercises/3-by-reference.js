'use strict';

const inc = (obj) => {
  if (obj.n !== undefined) obj.n += 1;
};

module.exports = { inc };
