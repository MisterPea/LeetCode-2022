/**
 * Given a list of the scores of different students, items, where items[i] = [IDi, scorei]
 * represents one score from a student with IDi, calculate each student's top five average.
 * 
 * Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej]
 * represents the student with IDj and their top five average. Sort result by IDj in increasing
 * order.
 * 
 * A student's top five average is calculated by taking the sum of their top five
 * scores and dividing it by 5 using integer division.
 */
/**
 * @param {number[][]} items
 * @return {number[][]}
 */

 var highFive = function (items) {
  students = {};

  for (let i = 0; i < items.length; i += 1) {
    const [key, val] = items[i];
    if (key in students) {
      if(students[key].length === 5){
        if(students[key][students[key].length - 1] < val){
          students[key].pop()
          students[key] = [...students[key], val].sort((a,b) => b - a)
        }
      } else {
        students[key] = [...students[key], val].sort((a,b) => b - a)
      }
      // no record
    } else {
      students[key] = [val];
    }

  }
  const output = [];
  for (const [k, v] of Object.entries(students)) {
    let avg = v.reduce((a, b) => a + b) / v.length;
    output.push([k, Math.floor(avg)]);
  }
  return output;
};


var highFive_v1 = function (items) {
  students = {};

  function testRemoveHigher(arr, val) {
    if (arr.length === 5) {
      const min = Math.min(...arr);
      if (val > min) {
        arr.splice(arr.indexOf(min), 1, val);
      }
    } else {
      arr.push(val);
    }
    return arr;
  }

  for (let i = 0; i < items.length; i += 1) {
    const [key, val] = items[i];
    if (key in students) {
      students[key] = testRemoveHigher(students[key], val);
      // no record
    } else {
      students[key] = [val];
    }
  }

  const output = [];
  for (const [k, v] of Object.entries(students)) {
    let avg = v.reduce((a, b) => a + b) / v.length;
    output.push([k, Math.floor(avg)]);
  }
  return output;
};

const items = [[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]];
console.log(highFive(items));