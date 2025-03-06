/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  let n = nums.length;
  let min = Number.MAX_SAFE_INTEGER;
  nums.sort((a,b) => a - b);
  for(let i = 0; i < n - k + 1; i++){
      min = Math.min(min, nums[i + k - 1] - nums[i])
  }
  return min
};