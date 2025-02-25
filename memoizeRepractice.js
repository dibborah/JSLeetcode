/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  let db = new Map();
  return function(...args) {
    if(db.has(args + '')) {
        return db.get(args + '');
    } else {
        const result = fn(...args);
        db.set(args + '', result);
        return result;
    };
  };
};

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
   callCount += 1;
   return a + b;
});

console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(memoizedFn(3, 2));
console.log(callCount);




