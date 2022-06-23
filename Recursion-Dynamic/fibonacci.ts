/**Fibonacci Numbers
 * Fn = Fn-1 + Fn-2
 * Base Cases: F1 = 1, F0 = 0
 */

// Pure Recursion Time: O(2^n)
function fibRec(fNum: number): number {
  if (fNum === 1) return 1;
  if (fNum === 0) return 0;
  return (fibRec(fNum - 1) + fibRec(fNum - 2));
}
// console.time('Pure Recursion');
// console.log(fibRec(45)); // 13 seconds
// console.timeEnd('Pure Recursion');

// Top Down - Dynamic - Memoization Time: O(n) from O(2n)
function fibTopDynamic(fNum: number, memo: number[] = new Array(fNum + 1)): number {
  if (fNum === 1 || fNum === 0) return fNum;
  memo[fNum] = fibTopDynamic(fNum - 1, memo) + fibTopDynamic(fNum - 2, memo);
  console.log(memo);
  return memo[fNum];
}
// console.log(fibDynamic(8));

// Bottom Up Dynamic programing
// Do the same as the Top down approach - but in reverse.
// first compute fib(1) and fib(0), which are base cases. Use those to compute fib(2)
// Then continue on using the previous computed values to compute fib(n)
function fibBottomUp(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const memo: number[] = new Array(n);
  memo[0] = 0;
  memo[1] = 1;
  // build the rest of the memo
  for (let i = 2; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  // Now we can look for the value
  return memo[n - 1] + memo[n - 2];
}
//console.log(fibBottomUp(6));

// You really only need i for i + 1 and i + 2
function fibBottomNoMemo(n: number): number {
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a + b;
}
console.log(fibBottomNoMemo(6));






// function decTest(fNum: number, memo: number[] = new Array(fNum + 1)): Array<number> {
//   return memo;
// }
// console.log(decTest(1));
