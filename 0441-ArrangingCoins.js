/**
 * You have n coins and you want to build a staircase with these coins.
 * The staircase consists of k rows where the ith row has exactly i coins.
 * The last row of the staircase may be incomplete.
 * Given the integer n, return the number of complete rows of the staircase you will build.
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let total = 0;
  let i = 1;
  while (total < n) {
    total += i;
    if (n - total < i + 1) {
      return i;
    }
    i += 1;
  }
};

const n = 3;
console.log(arrangeCoins(n));