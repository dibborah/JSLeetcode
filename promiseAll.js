// Leetcode problem no. and name
// 2721. Execute Asynchronous Functions in Parallel

// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
// shift
// removing all the elements of an array to the left by one position after removing the first element

let promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = []
    let completedCount = 0;

    if(functions.length === 0) {
        return resolve(results);
    };
    for(let index = 0; index < functions.length; index++) {
            
        functions[index]().then(response => {
          results[index] = response;
          completedCount++;
          
          if(completedCount === functions.length) {
            resolve(results);
          };

        }).catch((error) => {
            reject(error);
        });
    };
  });
};
  
  // Input example
//   const functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
//   ];

  
const promise = promiseAll([
    (() => new Promise(resolve => setTimeout(() => resolve(4), 50))),
    (() => new Promise(resolve => setTimeout(() => resolve(10), 150))),
    (() => new Promise(resolve => setTimeout(() => resolve(16), 100))),
    // (() => new Promise((resolve, reject) => reject('Error found!!!'))),
]);

promise.then(result => console.log(result)).catch((error) => console.log(error));