/**
 * Real description here: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/discuss/1913945/Problem-description-explained-in-simple-English
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = arr1.length;
  let mainLoopLength = arr1.length;
  let i = -1;

  function mainLoop() {
    if (i < mainLoopLength) {
      i += 1;
    } else {
      return count;
    }
    for (let j = 0; j < arr2.length; j += 1) {
      console.log([i, j], arr1[i], arr2[j], arr1[i] - arr2[j], count);
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        count -= 1;
        return mainLoop();
      }
    }
    return mainLoop();
  }
  return mainLoop();
};


const arr1 = [4,5,8];
const arr2 = [10,9,1,8];
const d = 2;
console.log(findTheDistanceValue(arr1, arr2, d));