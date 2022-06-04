/** 
 * Given a 2D matrix matrix, handle multiple queries of the following type:
 * Calculate the sum of the elements of matrix inside the rectangle defined
 * by its upper left corner (row1, col1) and lower right corner (row2, col2).
 * Implement the NumMatrix class:
 * NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
 * int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements
 * of matrix inside the rectangle defined by its upper left corner (row1, col1) and
 * lower right corner (row2, col2).
 * 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */


// Brute force - sub optimal
class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  sumRegion(row1, col1, row2, col2) {
    let runningTotal = 0;
    for (let x1 = col1; x1 <= col2; x1 += 1) {
      for (let y1 = row1; y1 <= row2; y1 += 1) {
        runningTotal += this.matrix[y1][x1];
      }
    }
    return runningTotal;
  }
}


const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]];
const obj = new NumMatrix(matrix);
const p = obj.sumRegion(1, 1, 2, 2);
console.log(p);