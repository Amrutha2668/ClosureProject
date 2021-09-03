function counterFactory() {
  let count = 10;
  let counter = {
    increment: function () {
      return (count += 1);
    },
    decrement: function () {
      return (count -= 1);
    },
  };
  return counter;
}

// eslint-disable-next-line no-undef
module.exports = {
  counterFactory: counterFactory,
};
