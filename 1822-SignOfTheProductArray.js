/**
 * There is a function signFunc(x) that returns:
 * 1 if x is positive.
 * -1 if x is negative.
 * 0 if x is equal to 0.
 * You are given an integer array nums. Let product be the product
 * of all values in the array nums.
 * Return signFunc(product).
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  if(nums.some((n) => n === 0)) {
    return 0;
  }
  let sign = 1;
  for (let i = 0; i < nums.length; i += 1) {
    if(nums[i] < 0) {
      sign = -sign;
    }
  }
  return sign
};

const nums = [-1, -2, -3, -4, 3, 2, 1];