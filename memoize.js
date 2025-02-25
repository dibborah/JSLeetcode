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
const memoizeFn = memoize((a, b) => {
    callCount += 1;
    return a + b;
});

console.log(memoizeFn(2, 2));
console.log(memoizeFn(2, 2));
console.log(callCount);
console.log(memoizeFn(1, 2));
console.log(callCount);

// [4, 4, 1, 3, 2]

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


// solve the factorial problem
// using recursion
// then fix for the factorial fn test case