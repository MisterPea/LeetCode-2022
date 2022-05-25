/**
 * Given an array arr of positive integers sorted in a
 * strictly increasing order, and an integer k.
 * Find the kth positive integer that is missing from this array.
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let i = 0;
  let numMissing = 1;
  let missingCount = 1;
  while (true) {
    if (arr[i] !== numMissing) {
      if (missingCount === k) {
        return numMissing;
      }
      missingCount += 1;
    } else {
      i += 1;
    }
    numMissing += 1;
  }
};


const arr = [1, 2];
const k = 1;
console.log(findKthPositive(arr, k));