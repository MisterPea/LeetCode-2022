/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting
 * and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {

  const leftEdge = (() => {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    while (left <= right) {
      mid = (left + right) >> 1;
      if (target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  })();

  const rightEdge = (() => {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    while (left <= right) {
      mid = (left + right) >> 1;
      if (target >= nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  })();

  if (leftEdge > rightEdge) {
    return [-1, -1];
  }
  return [leftEdge, rightEdge];

};


const target = 2;
const nums = [5, 7, 7, 8, 8, 10];
console.log(searchRange(nums, target));