// Cache With Time Limit

// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

// const TimeLimitedCacheAndroid = function() {
//   // how to make the key inaccessible once the duration is expired
//   // how to make the key value pair thing
//   // In the constructor
//   return class GetAndSetClass {
//     constructor() {
//         this.cache = new Map();
//     };
//     set(key, val, duration){
//         this.key = key;
//         this.key = val
//         setTimeout(fc, duration);
//     };
//     get(key) {};
//     count() {
//         return this.key;
//     };
//   };    
// };


// AI Solution
// class TimeLimitedCache {
//   constructor() {
//     this.cache = new Map(); // Store key-value pairs and their expiration times
//   };

//   set(key, value, duration) {
//     const currentTime = Date.now();
//     const expirationTime = currentTime + duration;

//     // Check if the key already exists and is not expired
//     const existingEntry = this.cache.get(key);
//     const isExistingAndNotExpired = existingEntry
//       && existingEntry.expirationTime > currentTime;

//     // Store the new value and expiration time
//     this.cache.set(key, { value, expirationTime });

//     // Return true if the key already exists and is not expired, otherwise false
//     return isExistingAndNotExpired;
//   };

//   get(key) {
//     const currentTime = Date.now();
//     const entry = this.cache.get(key);

//     // If the key exists and is not expired, return the value
//     if (entry && entry.expirationTime > currentTime) {
//       return entry.value;
//     };

//     // Otherwise, return -1
//     return -1;
//   };

//   count() {
//     const currentTime = Date.now();
//     let count = 0;

//     // Iterate through the cache and count un-expired keys
//     for (const [key, entry] of this.cache) {
//       if (entry.expirationTime > currentTime) {
//         count++;
//       } else {
//         // Remove expired keys from the cache
//         this.cache.delete(key);
//       };
//     };

//     return count;
//   };
// };


// My Solution
class TimeLimitedCache{
    constructor() {
      this.cache = new Map();
    };
    set(key, value, duration) {
      const currentTime = Date.now();
      const expiredTime = currentTime + duration;
      
      const isExisitingAndNotExpired = this.cache.has(key) && this.cache.get(key).expiredTime > currentTime;

      if(isExisitingAndNotExpired) {
          this.cache.set(key, { value, expiredTime });
          return true;
      }
      return false;
    };
    get(key) {
      const currentTime = Date.now();
      const isExisitingAndNotExpired = this.cache.has(key) && this.cache.get(key).expiredTime > currentTime;
      if(isExisitingAndNotExpired) {
          return this.cache.get(key).value;
      }
      return -1;
    };
    count() {
      const currentTime = Date.now();
      
      let count = 0;
      
      for(const [key, entry] of this.cache) {
          const isExisitingAndNotExpired = entry && entry.expiredTime > currentTime;
          if(isExisitingAndNotExpired) {
              count++;
          }else {
            this.cache.delete(key);
          }
      }
      
      return count;
    };
  };




