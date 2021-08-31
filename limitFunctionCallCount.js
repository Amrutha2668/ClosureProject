function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  var m = n;
  function limitCount() {
    while (m-- > 0) {
      cb();
    }
    if (m == 0) return null;
  }
  return limitCount;
}

module.exports = {
  limitFunctionCallCount: limitFunctionCallCount,
};
