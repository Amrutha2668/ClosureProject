const cacheFunction = require("../cacheFunction.js");

function cb(digit) {
  return digit * digit;
}

result = cacheFunction.cacheFunction(cb);
console.log(result(4));
