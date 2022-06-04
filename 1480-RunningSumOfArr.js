/**
 * Given an array nums.
 * We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const solution = [];
  let runningSum = 0;
  for(let i = 0; i < nums.length; i += 1) {
    runningSum += nums[i]
    solution.push(runningSum)
  }
  return solution;
};

const nums = [1,2,3,4]
console.log(runningSum(nums))