// Leetcode problem number and statement 
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.


/**
 * @param {Function} fn
 * @return {Object}
 */

const array = [ { "id": "1" }, { "id": "1" }, { "id": "2" } ];

const fn = function (item) { 
  return item.id; 
};

Array.prototype.groupBy = function(fn) {
  const result = {};
  for (let item of this) {
    const property = fn(item);
    result[property.toString()] = [];
  };
  for (let item of this) {
    const property = fn(item);
    result[property.toString()] = [];
  };
  return result;
};

console.log('result', array.groupBy(fn));

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
