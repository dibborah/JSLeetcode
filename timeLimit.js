// 2637. Promise Time Limit
// Medium
// Companies
// Hint
// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".


// function timeLimit(fn, t) {
//     return async function(...args) {
//       // Create a promise that rejects after t milliseconds
//       const timeoutPromise = new Promise((_, reject) => {
//         setTimeout(() => {
//           reject("Time Limit Exceeded");
//         }, t);
//       });

//       console.log('b4 args', args);
  
//       // Race the input function's promise against the timeout promise
//       return Promise.race([fn(...args), timeoutPromise]);
//     };
//   }

  
const timeLimit = (fn, t) => {
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t)
        });

        args = args.flat();
        console.log('af using flat', args);
        
        return Promise.race([fn(...args), timeoutPromise]);
    };
};



// Example asynchronous function
// async function exampleFunction(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Function completed successfully");
//     }, delay);
//   });
// };

const    exampleFunction = async (a) => {
  console.log('a', a);
  await
    new Promise(res => setTimeout(res, 120));
    return a * a;
};

const input = [5, 10];
  
// Create a time-limited version of the function with a 2-second limit
const timeLimitedFn = timeLimit(exampleFunction, 2000);

// Test case 1: Function completes within the time limit
timeLimitedFn(input)
  .then((result) => console.log(result)) // Output: "Function completed successfully"
  .catch((error) => console.log(error));

// Test case 2: Function exceeds the time limit
// timeLimitedFn(3000)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error)); // Output: "Time Limit Exceeded"