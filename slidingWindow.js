/**
 * slidingWindow.js
 */
/**
 * Given an array of positive numbers and a positive number 'K',
 * find the maximum sum of any contiguous subarray of size 'K'
 * Ex:
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 * Time Complexity: O(n) Space: O(1)
 */
function maximumSumSubArray(array, K) {
  let windowStart = 0,
      windowSum = 0,
      maximumSum = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    // We've built up to the window size 'K', now shift the window one place
    if (windowEnd >= K - 1) {
      maximumSum = Math.max(maximumSum, windowSum);
      // subtract last element and move windowStart pointer
      windowSum -= array[windowStart];
      windowStart += 1;
    }
  }

  return maximumSum;
}
// console.log(maximumSumSubArray([2, 1, 5, 1, 3, 2], k=3))

/**
 * Smallest Subarray with a Greater Sum
 * Given an array of positive numbers and a positive number 'S'
 * Find the length of the smallest contiguous subarray whos sum is
 * greater than or equal to 'S'. Return 0 if none.
 * Time Complexity: O(n + n) Since the inner while loop processes each element
 * only once.
 */
function smallestSubArray(array, S) {
  let windowStart = 0,
      windowSum = 0,
      minimumLength = Infinity;


  //
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    // If we reach the target 'S'. Check if the windowSum is greater than minLength and swap
    // Then try to shrink the window from the left and check if it's still smaller
    // update the minLength if true, else increase the right side of the window
    while (windowSum >= S) {
      minimumLength = Math.min(minimumLength, windowEnd - windowStart + 1);
      windowSum -= array[windowStart];
      windowStart += 1;
    }
  }
    if (minimumLength === Infinity) {
      return 0;
    }

    return minimumLength;

  }
// console.log(smallestSubArray([1], S=1));
 //Output: 2
 //Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

/**
 * Longest Substring with maximum K Distinct Characters
 * Input: String="cbbebi", K=3
  Output: 5
  Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 */
function longestSubstringDistinct(str, K) {
  let windowStart = 0,
      maxLength = 0,
      charFrequency = {};

  // Try to extend the range of the substring [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency += 1;

    // Shrink the sliding window, until we are left with 'k' distinct
    // characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

//console.log(longestSubstringDistinct("cbbebi", K=3));
