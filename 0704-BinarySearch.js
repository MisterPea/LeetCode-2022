/**
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = (nums, target) => {
  let mid = 0;
  let min = 0;
  let max = nums.length - 1;
  while (min !== max) {
    mid = Math.ceil((min + max) / 2);
    if (nums[mid] > target) {
      max = mid - 1;
    } else {
      min = mid;
    }
  }
  if (nums[min] === target) {
    return min;
  }
  return -1;
};

const nums = [-1, 0, 3];
const target = 0;
console.log(search(nums, target));