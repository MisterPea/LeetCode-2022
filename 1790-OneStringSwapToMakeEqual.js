/**
 * You are given two strings s1 and s2 of equal length.
 * A string swap is an operation where you choose two indices in a string
 * (not necessarily different) and swap the characters at these indices.
 * Return true if it is possible to make both strings equal by performing at
 * most one string swap on exactly one of the strings. Otherwise, return false.
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function (s1, s2) {
  const diff1 = [];
  const diff2 = [];
  if (s1 === s2) {
    return true;
  }

  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) {
      if(diff1.length === 2) {
        return false;
      }
      diff1.push(s1[i]);
      diff2.push(s2[i]);
    }
  }

  for (let d1 of diff1) {
    if (!diff2.includes(d1)) {
      return false;
    } 
  }
  return true;
};

const s1 = "xkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx"
const s2 = "fkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkf"
console.log(areAlmostEqual(s1, s2));
