/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  let init = [[1]];

  for (let i = 0; i < numRows - 1; i += 1) {
    
    const newLine = [];
    
    for (let j = 0; j <= init[i].length; j += 1) {
      if (j === 0) {
        newLine.push(init[i][j]);
      }
      if (j === init.length) {
        newLine.push(init[i][j - 1]);
      }
      if (j > 0 && j < init[i].length) {
        newLine.push(init[i][j - 1] + init[i][j]);
      }
    }
    init.push(newLine);
  }
  return init;
};

console.log(generate(5));

