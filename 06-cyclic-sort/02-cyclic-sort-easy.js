/**
 * Given an array containing 'n' objects.
 * Each object when created was assigned a unique number from 1 to n based on their creation sequence.
 * So, object created with sequence number 3 was created before object with sequence number 4.
 * 
 * Write a function to sort the objects in place based on their creation sequence number in O(n) time.
 * Assume integer array for this problem.
 * 
 * ex: 
 * Input: [3, 1, 5, 4, 2] Output: [1, 2, 3, 4, 5]
 * 
 */

const cyclic_sort = function(nums) {
    // Iterate through array, compare sequenceValue to index,
    // call swap, do not move on
    // untill currentSequence == currentIndex
    let index = 0;
    while(index < nums.length) {
        let sequenceValue = nums[index];
        let modifiedIndex = sequenceValue - 1;
        if (modifiedIndex !== index) {
            swap(nums, index, sequenceValue, modifiedIndex);
        } else {
            index++;
        }
    }
    return nums;
}
// swap the sequenceValue to modifiedIndex, place the tempValue of modifiedIndex at index
const swap = function(nums, index, sequenceValue, modifiedIndex) {
    let tempValue = nums[modifiedIndex];
    nums[modifiedIndex] = sequenceValue;
    nums[index] = tempValue;
}

/**
 * Since input array is 1 through n. We will place sequence 1 at index 0 - so we will have to subtract 1 for the index for each sequence placement.
 * I believe this is also implying that if the range was 0 to n. we wouldn't have to do this.
 * 
 * Algorithm: 
 * Iterate through the parameter (array)
 * check if current sequence value is equal to the current index
 * Swap each index to its correct spot.
 * Check the swapped sequence at current position.
 * Keep swapping until the swapped sequence matches the current index.
 * 
 * cyclic_sort function (will navigate through array)
 * swap (will swap sequences)
 * 
 * Variables:
 * currentIndex
 * modifiedIndex = index - 1 (to account for 0 index)
 * tempValue (for swapping)
 * newIndex ()
 */


function cyclic_sort_optimized(nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i += 1;
        }
    }
    return nums;
}

/** here we use a destructuring assignment to avoid having to create a temp variable.
 * Here we get the correctIndex for the currentValue and compare
 * its index array value to the current index array value. if they are 
 * not equivalent, we do a destructure assignment to swap.
 * the destructuring operation swaps the values at i and j.
 * where i is the current index, and j is the currentIndex's value - 1 for its proper index. 
 * I believe once they are equivalent - they are pointing to the same value and index location.
 * 
 */


const testOne = [3, 1, 5, 4, 2];
const testTwo = [2, 1, 3, 4, 5];
console.log(cyclic_sort(testOne));
console.log(cyclic_sort(testTwo));
console.log("Optimized Tests:")
console.log(cyclic_sort_optimized(testOne));
console.log(cyclic_sort_optimized(testTwo));
