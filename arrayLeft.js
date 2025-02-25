
function reverseArray(arr, i, j) {
    while(i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

function rotateLeft(nums, d) {
    const n = nums.length;

    for(i = n - 1; i >= 0; i--) {
        // reverse 1st part
        reverseArray(nums, 0, n - d - 2);
        // reverse 2nd part
        reverseArray(nums, n-d-1, n - 1);
        // reverse entire array
        reverseArray(nums, 0, n-1)
        console.log(nums)
    }
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));

// arr[] = [1, 2, 3, 4, 5], d = 2;
// [2,1,5,4,3]
// [3,4,5,1,2]
// Output: [3, 4, 5, 1, 2]