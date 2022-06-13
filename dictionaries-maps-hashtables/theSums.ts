/** Two Number Sum
 * Write a function that takes in an array of distinct integers and an integer
 * representing a targetSum. If any two numbers in the input array sum up to
 * targetSum, return them in an array. Else return an empty array.
 *
 * Input:
 * array, targetSum
 * Output:
 * array of 2 numbers or empty array, or an array of their indicies
 *
 * if a + b = c, then b = c - a, where
 * b = another value, c = targetSum, a is a current value
 * [1, 2, 3], targetSum = 4
 * b = 4 - 3 = 1
 * Was 1 seen yet? if so, output currentIndex and 1.
 * Can save just the values to a Map. If you need the indicies, save the
 * key:value pair as: b:index
 */
// Map - O(n) time | O(n) space
function twoNumberSum(array: number[], sum: number) {
  const numbersSeen = new Map<number, number>();

  for (let index = 0; index < array.length; index++) {
    let potentialMatch = sum - array[index];
    if (numbersSeen.has(potentialMatch)) {
      return [potentialMatch, array[index]];
    }
    numbersSeen.set(index, potentialMatch);
  }
  return [];
}
//console.log(twoNumberSum([1,2,3,4], 4));

// Pointers - O(nlogn) time | O(n) space
function twoNumberSumP(array: number[], targetSum: number) {
  array.sort((a,b) => a - b);
  let left: number = 0;
  let right: number = array.length - 1;

  // until the pointers meet. Compare their sum to targetSum
  // move a pointer depending on wether its greater/less than targetSum
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }
  return [];
}
// console.log(twoNumberSumP([1,2,3,4], 4));
