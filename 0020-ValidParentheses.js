/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const matches = { '(': ')', '[': ']', '{': '}' };
  const needed = [];

  if(s.length === 1) {
    return false;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (matches.hasOwnProperty(s[i])) {
      needed.push(matches[s[i]]);
    } else {
      if(needed.length === 0){
        return false;
      } else {
        const lastParen = needed.pop();
        if(lastParen !== s[i]){
          return false;
        }
      }
    }
  }
  if(needed.length === 0){
    return true;
  }

  return false;
};

const s = '()'
console.log(isValid(s))