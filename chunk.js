
// Leetcode problem no. and name: 
// 2677. Chunk Array
// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

// const arr = [1,2,3,4,5], size = 1;

// const arr = [42, 10, 19, 6, 8, 7, 9, 325, 0, 428, 23, 757], size = 3;

const arr = [1,9,6,3,2], size = 3;
// const arr = [1,2,3,4,5], size = 6;
// const arr = [], size = 1;

// My solution
// const chunked = [];
// let chunk = function (arr, size) {
//   const length = Math.ceil(arr.length / size);
//   let innerIndex = 0;
//   for (let index = 0; index < length; index++) {
//     let temp = []
//     for(let index_ = 0; index_ < size; index_++) {
//       if(arr[innerIndex] === undefined) break;
//       temp[index_] = arr[innerIndex];
//       innerIndex++
//     };
//     chunked[index] = temp;
//   };
//   return chunked;
// };

// console.log('arr', arr);
// chunk(arr, size);
// console.log('chunked', chunked);


// AI solution
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    // Extract a chunk of size 'size' and push it into the result array
    console.log(i, i + size);
    result.push(arr.slice(i, i + size));
  };
  return result;
};

console.log('result', chunk(arr, size));
