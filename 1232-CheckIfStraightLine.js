/**
 * You are given an array coordinates, coordinates[i] = [x, y],
 * where [x, y] represents the coordinate of a point. 
 * Check if these points make a straight line in the XY plane.
 */
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) {
    return true;
  }
  const calcXYDiff = (i) => {
    const x = coordinates[i][0] - coordinates[i + 1][0];
    const y = coordinates[i][1] - coordinates[i + 1][1];
    return [x, y];
  };

  let prevDiff = calcXYDiff(0);
  for (let i = 0; i < coordinates.length - 1; i += 1) {
    const [x1, y1] = prevDiff;
    const [x2, y2] = calcXYDiff(i);
    if (x1 * y2 !== y1 * x2) {
      return false;
    }
  }
  return true
};

// const c = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]; //bad
const c = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]; // good
// const c = [[0, 0], [0, 1], [0, -1]]; // good
console.log(checkStraightLine(c));