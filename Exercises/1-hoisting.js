/* eslint-disable no-use-before-define */
/* eslint-disable no-var */
'use strict';

const fn = () => {
  console.log(a);
  var a = true;
};

module.exports = { fn };
