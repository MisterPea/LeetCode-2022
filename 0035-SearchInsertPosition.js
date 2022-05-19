/**
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the index
 * where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid = 0;
  while (min !== max) {
    mid = Math.ceil((min + max) / 2);
    if (nums[mid] > target) {
      max = mid - 1;
    } else {
      min = mid;
    }
  }
  // Matches
  if (nums[min] === target) {
    return min;
  }
  // Non-Matches
  if (min === 0 && nums[min] > target) {
    return 0;
  } else {
    return min + 1;
  }
};

const nums = [1, 3, 5, 6];
const target = 0;
console.log(searchInsert(nums, target));