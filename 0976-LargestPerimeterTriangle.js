/**
 * Given an integer array nums, return the largest perimeter of a triangle
 * with a non-zero area, formed from three of these lengths.
 * If it is impossible to form any triangle of a non-zero area, return 0.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((x, y) => y - x)
  let max = 0;
  for (let i = 0; i < nums.length - 2; i += 1) {

    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      max = Math.max(max, nums[i] + nums[i + 1] + nums[i + 2]);
    }
  }
  return max;
};

nums = [1,2,2,4,18,8];
console.log(largestPerimeter(nums));