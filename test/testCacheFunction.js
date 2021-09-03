// eslint-disable-next-line no-undef
const cacheFunction = require("../cacheFunction.js");

function cb(digit) {
  return digit * digit;
}

let result = cacheFunction.cacheFunction(cb);
console.log(result(4));
