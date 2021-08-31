const limitCount = require('../limitFunctionCallCount.js');
function cb(){
    // Just for reference it would execute 5 times
    console.log("***");
}
result=limitCount.limitFunctionCallCount(cb,5);
console.log(result());