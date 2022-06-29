/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const len = s.length;
  if (len === 0 || len === 1) {
    return true;
  }
  let beg = 0;
  let end = len - 1;

  while (beg < end) {
    const validBeg = /^[A-Za-z0-9]$/.test(s[beg])
    const validEnd = /^[A-Za-z0-9]$/.test(s[end])

    if (validBeg && validEnd) {
      if (s[beg].toLowerCase() === s[end].toLowerCase()) {
        beg += 1;
        end -= 1;
      } else {
        // no match
        return false;
      }
    } else {
      // if we don't have a valid number or letter;
      if (!validBeg) {
        beg += 1;
      }
      if (!validEnd) {
        end -= 1;
      }
    }
  }
  return true;
};

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));