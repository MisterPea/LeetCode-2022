/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const distance = height * width;

  let limit = { top: 1, bottom: height - 1, left: 0, right: width - 1 };
  let x = 0;
  let y = 0;
  const output = [];


  for (let i = 0; i < distance; i += 1) {

    output.push(matrix[y][x]);

    if (x !== limit.right && y === limit.top - 1) {
      x += 1;
    } else if (y !== limit.bottom && x === limit.right) {
      y += 1;
    } else if (x !== limit.left && y === limit.bottom) {
      x -= 1;
    } else if (y !== limit.top) {
      y -= 1;
      
      if (y === limit.top) {
        limit.top += 1;
        limit.bottom -= 1;
        limit.left += 1;
        limit.right -= 1;
      }
    }
  }
  return output;
};

// const matrix = [[3],[2]];
// const matrix = [[3,1],[2,5]]
// const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
const matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
console.log(spiralOrder(matrix));