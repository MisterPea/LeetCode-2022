/**
 * Given two non-negative integers low and high.
 * Return the count of odd numbers between low and high (inclusive).
 */
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  const odd = (low % 2 !== 0 || high % 2 !== 0 ? 1 : 0);
  return Math.floor((high - low) / 2 + odd);
};


const l = 21;
const h = 22;
countOdds(l, h);