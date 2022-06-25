/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram_v1 = function (s, t) {
  const one = s.split('');
  for (let i = 0; i < t.length; i += 1) {
    const index = one.indexOf(t[i]);
    if (index === -1) {
      return false;
    } else {
      one.splice(index, 1);
    }
  }
  if (one.length === 0) {
    return true;
  }
  return false;
};

function isAnagram_v2(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const one = [];
  const two = [];

  for (let i = 0; i < s.length; i += 1) {
    one.push(s[i]);
    two.push(t[i]);
  }
  one.sort();
  two.sort();

  for (let j = 0; j < t.length; j += 1) {
    if (one[j] !== two[j]) {
      return false;
    }
  }
  return true;
}

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const one = [];
  const two = [];

  for (let i = 0; i < s.length; i += 1) {
    one.push(s[i]);
    two.push(t[i]);
  }

  for (let j = 0; j < t.length; j += 1) {
    const index = two.indexOf(one[j]);
    if (index === -1) {
      return false;
    } else {
      two.splice(index, 1);
    }
  }
  if (two.length !== 0) {
    return false;
  }
  return true;
}

