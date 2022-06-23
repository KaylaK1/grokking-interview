/** TripleStep
 * A child is running up a staircase with n steps and can hop either 1 step,
 * 2 step, or 3 steps at a time. Implement a method to count how many possible
 * ways the child can run up the stairs
 *
 * Input: n
 * Output: sum of the ways
 *
 * (n - 1) + (n - 2) + (n - 3)
 * Base Cases:
 * n = 0 return 0
 * n = 1 return 1
 * n < 0 return 0
 *
 * Here we should say that if n is 0. It's equivalent to one step. So if we are at the
 * end when n = 0. That means we took our last step.
 *
 * Think about all of the paths to the ns to the nth step.
 * If we were to multiply each case that would signify taking one path then another.
 * What we want to know is which of the three we can do?
 */


// O(n^3) - since we have three branching paths
function countWays(n:number): number {
  if (n < 0) {
    return 0;
  }
  else if (n === 0) {
    return 1;
  } else {
  return countWays(n - 1) + (n - 2) + (n - 3);
  }
}
//console.log(countWays(4));

// Memo - Cache each value and check for a cached value
// function countWaysMemo(n: number): number {
//   const memo: number[] = new Array(n + 1);
//   return tripleStep(n, memo);
// }

function tripleStep(n: number, memo: number[] = new Array(n + 1)): number {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    memo[n] = tripleStep(n - 1, memo) + tripleStep(n - 2, memo) + tripleStep(n - 3, memo);
  }
  return memo[n];
}
console.log(tripleStep(37));
