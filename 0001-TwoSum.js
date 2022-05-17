/**
 * Given an array of integers nums and an integer target, return indices
 * of the two numbers such that they add up to target. You may assume that each
 * input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.} nums 
 */
/**
 * Version 1
 */
var twoSumOne = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    const diff = nums.indexOf(target - nums[i]);
    if (diff !== i && diff !== -1) {
      return [diff, i];
    }
  }
};

/**
 * Version 2
 */
var twoSumTwo = function (nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i += 1) {
    const key = nums[i];
    if (differences[key] === undefined) {
      differences[target - key] = [i];
    } else {
      differences[target - key] = [...differences[key], i];
    }
  }
  const val = Object.values(differences);
  for (let d = 0; d < val.length; d += 1) {
    if (val[d].length === 2) {
      return val[d];
    }
  }
};

/**
 * Version 3
 */
var twoSumThree = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (target - nums[i] in hash) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};

/**
 * Version 4
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    const tempIndex = nums.indexOf(target - nums[i])
    if (tempIndex !== i && tempIndex !== -1) {
      return [tempIndex, i];
    }
  }
};
