console.log('index.js loaded');

// import square, { WHW, WORKING_HOURS_WEEK as hrs, counter, dec, inc, sum } from './mymodule.js';
import { default as square, WHW, WORKING_HOURS_WEEK as hrs, dec, inc, sum } from './mymodule.js';

import { dec as azalt, inc as artir } from './utils/util.js';

console.log('WHW :>> ', WHW);
console.log('hrs :>> ', hrs);
console.log('square(4) :>> ', square(4));

inc(4);
// console.log(counter);
inc(6);
dec();
// console.log('counter :>> ', counter);
console.log('dec()', dec());
console.log('sum(3,4) :>> ', sum(2, 5));

console.log('artir() :>> ', artir());
console.log('azalt() :>> ', azalt());
