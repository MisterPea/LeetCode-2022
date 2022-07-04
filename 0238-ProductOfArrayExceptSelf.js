var productExceptSelf = function(nums) {
  const left = [1];
  const right = [1];
  const output = [];
  
  for (let i = 1; i < nums.length; i += 1) {
      left.push(nums[i - 1] * left[i - 1]);
      right.unshift(nums[nums.length - i] * right[right.length - i]);
  }

  for(let j = nums.length - 1; j > 0; j -= 1){

  }
  
  for (let i = 0; i < left.length; i += 1) {
      output.push(left[i] * right[i])
  }
  return output
};


const nums = [4, 5, 1, 8, 2, 10, 6];
console.log(productExceptSelf(nums))

// [
//   4800, 3840,
//  19200, 2400,
//   9600, 1920,
//   3200
// ]
