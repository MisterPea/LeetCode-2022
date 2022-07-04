/**
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 * Return the leftmost pivot index. If no such index exists, return -1.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const left = [nums[0]];
  const right = [nums[nums.length - 1]];
  for (let i = 1; i < nums.length; i += 1) {
    left.push(nums[i] + left[i - 1]);
    right.unshift(nums[nums.length - 1 - i]  + right[right.length - i]);

  }

  for(let j = 0; j < left.length; j += 1){
    if(left[j] === right[j]){
      return j
    }
  }
  return -1;
};

var pivotIndex_v1 = function (nums) {
  let sum = 0;
  for (let s = 0; s < nums.length; s += 1) {
    sum += nums[s];
  }

  let leftSum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));