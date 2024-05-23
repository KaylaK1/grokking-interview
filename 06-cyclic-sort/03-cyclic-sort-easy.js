/**
 * Find the missing integer.
 * Given an array of n distinct integers from 0 to n.
 * The array only has n numbers out of the total n - 1 numbers
 * Ex: Input [4, 0, 3, 1] output: 2
 * 
 * Differences between 02-cylic-sort
 * - 0 to n
 * - each number will = the index instead of index + 1
 * -- so nums[i] = num[nums[i]]
 * - We have to ignore n as we can't place in it's spot.
 * -- Since the range is 0 to n. We examine nums[i] < length
 * - We cannot move on until the correct number is swapped
 */

/**
 * Iterate
 * 
 */
function cyclic_sort_missing(nums) {
    let i = 0;
    const n = nums.length;
    while (i < nums.length) {
        let j = nums[i];
        if (nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j] = nums[j], nums[i]];
        } else {
            i += 1;
        }
    }

    for (i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
}

console.log(cyclic_sort_missing([4, 0, 3, 1]));