var once = function(fn) {
    let i = 1;
    return function(...args) {
        if(i) {
            i = 0;
            return fn(...args);
        }
        return undefined;
    }
};

let fn = (a,b,c) => (a + b + c);

let oneFn = once(fn)
console.log(oneFn(1,2,3));
console.log(oneFn(2,3,3));
console.log(oneFn(4,2,3));
console.log(oneFn(7,1,3));

/**

* let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
