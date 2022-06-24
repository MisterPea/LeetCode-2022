/**
 * Given an array of characters chars, compress it using the following algorithm:
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 * The compressed string s should not be returned separately, but instead, be stored in the input character array chars
 * Note that group lengths that are 10 or longer will be split into multiple characters in chars.
 * 
 * After you are done modifying the input array, return the new length of the array.
 * You must write an algorithm that uses only constant extra space.
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  const length = chars.length;

  let currentLtr = undefined;
  let currentArray = [];

  // helper function to consolidate and push info to chars array
  function pushToChars() {
    const len = currentArray.length;
    if (len > 1) {
      const num = String(len).split('');
      chars.push(currentLtr, ...num);
    } else {
      chars.push(currentLtr);
    }
  }

  for (let i = 0; i < length; i += 1) {
    const tempLtr = chars.shift();

    if (tempLtr !== currentLtr && currentLtr) {
      pushToChars();
      currentArray = [tempLtr];
      currentLtr = tempLtr;

    } else {
      currentLtr = tempLtr;
      currentArray.push(currentLtr);
    }

    // on last iteration push remaining currentArray over to chars
    if (i === length - 1) {
      pushToChars();
    }
  }
  return chars.length;
};

chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
// chars = ["a", "a", "b", "b", "c", "c", "c"];
// const chars = ["a", "a", "a", "b", "b", "a", "a"];
// const chars = ['a'];
console.log(compress(chars));