/**
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const output = [];
  for (let i = 1; i <= n; i += 1) {
    let currentOutput = '';
    if (i % 3 === 0) {
      currentOutput = 'Fizz';
    }
    if (i % 5 === 0) {
      currentOutput = `${currentOutput}Buzz`;
    }
    if (currentOutput.length === 0) {
      currentOutput = `${i}`;
    }
    output.push(currentOutput);
  }
  return output;
};

console.log(fizzBuzz(15));