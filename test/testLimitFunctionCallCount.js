// eslint-disable-next-line no-undef
const limitCount = require("../limitFunctionCallCount.js");
function cb() {
  // Just for reference it would execute 5 times
  console.log("***");
}
let result = limitCount.limitFunctionCallCount(cb, 5);
console.log(result());
