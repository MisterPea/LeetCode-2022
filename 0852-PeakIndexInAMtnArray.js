/**
 * Let's call an array arr a mountain if the following properties hold:
 * arr.length >= 3 
 * There exists some i with 0 < i < arr.length - 1 such that:
 * arr[0] < arr[1] < ... arr[i-1] < arr[i] ... arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * Given an integer array arr that is guaranteed to be a mountain,
 * return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  // naïve solution
  let i = 0;
  while (true) {
    if (arr[i] < arr[i + 1]) {
      i += 1;
    } else {
      return i;
    }
  }
};

const peakIndexInMountainArrayBin = (arr) => {
  // binary solution
  let min = 0;
  let mid = 0;
  let max = arr.length - 1;
  while (true) {
    mid = Math.ceil((min + max) / 2);
    // match
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return arr[mid];
    }
    // mid is before peak
    if (arr[mid] < arr[mid + 1]) {
      min = mid - 1;
    }
    // mid is after peak
    if (arr[mid] > arr[mid + 1])
      max = mid;
  }
};


const arr = [0, 10, 5, 2];
console.log(peakIndexInMountainArrayBin(arr));