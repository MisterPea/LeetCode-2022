/**
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const seen = { unique: [], dupes: [] };

  function addToDupes(letter) {
    const index = seen.unique.indexOf(letter);
    seen.unique.splice(index, 1);
    seen.dupes.push(letter);
  }

  for (let i = 0; i < s.length; i += 1) {
    if (seen.dupes.includes(s[i])) {
      continue;
    } else if (seen.unique.includes(s[i])) {
      addToDupes(s[i]);

    } else {
      seen.unique.push(s[i]);
    }
  }
  if (seen.unique.length === 0) {
    return -1;
  }
  const uniqueLetter = seen.unique[0];
  return s.indexOf(uniqueLetter);
};