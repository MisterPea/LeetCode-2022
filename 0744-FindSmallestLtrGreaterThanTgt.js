/**
 * Given a characters array letters that is sorted in non-decreasing order
 * and a character target, return the smallest character in the array that is larger than target.
 * Note that the letters wrap around.
 * For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let min = 0;
  let mid = 0;
  let max = letters.length - 1;
  while (min !== max) {
    mid = Math.ceil((min + max) / 2);
    if (letters[mid] > target) {
      if (letters[mid - 1] <= target) {
        return letters[mid];
      }
      if (letters[mid - 1] > target) {
        max = mid - 1;
      } else {
        min = mid;
      }
    } else {
      min = mid;
    }
  }
  return letters[0];
};


const letters = ["c", "f", "j"];
const target = 'g';
console.log(nextGreatestLetter(letters, target));