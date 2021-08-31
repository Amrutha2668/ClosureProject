const counterFunction = require('../counterFactory.js');
counter=counterFunction.counterFactory();
console.log(counter.increment());
console.log(counter.decrement());