/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var count = 0;
  for (i = 0; i < 32; i++) {
    // 0 & 1 = 0 :: 1 & 1 = 0
    if (n&1) {
      count++;
    }
    // advance till we see a 1
    n >>= 1;
  }
  return count;
};

const n = 11111111111111111111111111111101
console.log(hammingWeight(n));