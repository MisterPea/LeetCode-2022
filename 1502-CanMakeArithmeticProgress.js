/**
 * A sequence of numbers is called an arithmetic progression if
 * the difference between any two consecutive elements is the same.
 * Given an array of numbers arr, return true if the array can be rearranged
 * to form an arithmetic progression. Otherwise, return false.
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let distance = undefined;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i += 1) {
    if(distance === undefined){
      distance = arr[i] - arr[i +1]
    } else {
      if(distance !== arr[i] - arr[i +1]){
        return false
      }
    }
  }
  return true;
};

const arr = [3, 5, 1, 7];
canMakeArithmeticProgression(arr);