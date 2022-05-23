/**
 * Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated, and only
 * the integer part of the result is returned.
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let min = 0;
  let mid = 0;
  let max = x;
  const maxDiff = 0.001;

  if(x === 1) {
    return 1;
  }

  while (true) {
    mid = (min + max) / 2;
    if (Math.abs((mid * mid) - x) < maxDiff) {
      return Math.floor(mid)
    }
    if ((mid * mid) > x) {
      max = mid;
    }
    if ((mid * mid) < x) {
      min = mid;
    }
  }
};

const x = 1;
console.log(mySqrt(x));