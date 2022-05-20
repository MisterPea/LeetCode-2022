/**
 * You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y).
 * You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi).
 * A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
// var nearestValidPoint = function (x, y, points) {
//   let validPoints = [];
//   let min = undefined;
//   const manhattanDistance = (newX, newY) => Math.abs(x - newX) + Math.abs(y - newY);
//   for (let i = 0; i < points.length; i += 1) {
//     // if valid points
//     if (points[i][0] === x || points[i][1] === y) {
//       const distance = manhattanDistance(points[i][0], points[i][1]);

//       // start array over if undefined or new low
//       if ( min === undefined || distance < min) {
//         min = distance;
//         validPoints = [{ distance: manhattanDistance(points[i][0], points[i][1]), xy: [points[i][0], points[i][1]] }];

//         // append if equal to low
//       } else if (distance <= min) {
//         min = distance;
//         validPoints.push({ distance: manhattanDistance(points[i][0], points[i][1]), xy: [points[i][0], points[i][1]] });
//       }
//     }
//   }
//   if (validPoints.length === 0) {
//     return -1;
//   }
//   if (validPoints.length === 1) {

//     return validPoints[0].distance;
//   }
//   let lowIndex = undefined;
//   for (let i = 0; i < validPoints.length; i += 1) {
//     if (!lowIndex) {
//       lowIndex = Math.min(validPoints[i].xy[0], validPoints[i].xy[1]);
//     } else {
//       lowIndex = Math.min(lowIndex, validPoints[i].xy[0], validPoints[i].xy[1]);
//     }
//   }
//   return lowIndex;
// };

var nearestValidPoint = function (x, y, points) {
  let minManhattan = Infinity;
  let minIndex = -1;
  for (let i = 0; i < points.length; i += 1) {
    const [a, b] = points[i];
    if (a === x || b === y) {
      const md = Math.abs(x - a) + Math.abs(y - b);
      if (md < minManhattan) {
        minIndex = i;
        minManhattan = md;
      }
    }
  }
  return minIndex;
};

const points = [[1,2],[3,1],[2,4],[2,3],[4,4]];
const x = 13;
const y = 44;
console.log(nearestValidPoint(x, y, points));
