function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return max + min
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
