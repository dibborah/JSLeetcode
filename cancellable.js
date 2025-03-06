/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// 2715. Timeout Cancellation

// var cancellable = function(fn, args, t) {
//   return setTimeout((() => {
//     return fn(...args)
//   }), t);
// };
     
// const cancelTimeMs = 100;
// console.log(cancellable((x1, x2) => x1 * x2, [2,4], 30));

// setTimeout(cancelFn, cancelTimeMs);


function cancellable(fn, args, t) {
    // Variable to hold the timeout ID
    let timeoutId;
    
    // Function to cancel the execution of the fn
    const cancelFn = () => {
        clearTimeout(timeoutId);
    };
    
    // Set the initial timeout for invoking the function
    timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    // Return the cancel function
    return cancelFn;
};


const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;

const cancelFn = cancellable(fn, args, t, cancelTimeMs);

setTimeout(cancelFn, cancelTimeMs);
// Set another timeout to invoke cancelFn after cancelTimeMs







/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)

 */