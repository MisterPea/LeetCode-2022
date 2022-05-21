/**
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in
 * a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = (n) => {
  const prevNums = [];
  let nums = n;

  while (true) {
    const digits = [];

    (() => {
      while (nums !== 0) {
        let digit = nums % 10;
        digits.push(digit);
        nums = (nums - digit) / 10;
      }
    })();

    let sumSqr = 0;
    for (let i = 0; i < digits.length; i += 1) {
      sumSqr = sumSqr + (digits[i] * digits[i]);
    }

    if (prevNums.includes(sumSqr)) {
      return false;
    } else if (sumSqr === 1) {
      return true;
    } else {
      prevNums.push(sumSqr);
      nums = sumSqr;
    }
  }
};




n = 99;
console.log(isHappy(n));
