/**
 * Given an integer number n, return the difference
 * between the product of its digits and the sum of its digits.
 * Input: n = 234
 * Output: 15 
 * Explanation: 
 * Product of digits = 2 * 3 * 4 = 24 
 * Sum of digits = 2 + 3 + 4 = 9 
 * Result = 24 - 9 = 15
 */
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSumStd = function (n) {
  let carry = n;
  let sum = 0;
  let product = 1;
  while (carry) {
    sum += carry % 10;
    product *= carry % 10;
    carry = (carry - carry % 10) / 10;
  }
  return product - sum;
};


var subtractProductAndSumRecursive = (n) => {
  let sum = 0;
  let product = 1; 
  const extractNumbers = (carry) => {
    sum += carry%10;
    product *= carry%10
    const newCarry = (carry - carry%10)/10;
    if(newCarry) {
      return extractNumbers(newCarry)
    } 
    return product - sum;
  }
  return extractNumbers(n)
}

n = 234;
console.log(subtractProductAndSumRecursive(n));