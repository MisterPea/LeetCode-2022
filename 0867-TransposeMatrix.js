/**
 * Given a 2D integer array matrix, return the transpose of matrix.
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 * 
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    temp = [];
    for (let j = 0; j < matrix.length; j += 1) {
      temp.push(matrix[j][i]);
    }
    newMatrix.push(temp);
  }
  return newMatrix;
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];
console.log(transpose(matrix));