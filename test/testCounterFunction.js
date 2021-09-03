// eslint-disable-next-line no-undef
const counterFunction = require("../counterFactory.js");
let counter = counterFunction.counterFactory();
console.log(counter.increment());
console.log(counter.decrement());
