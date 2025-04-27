/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
  let res = 0;
  let n = nums.length
  for(let i = 0; i < n - 2; i++){
      if(parseFloat(nums[i + 1] / 2) == (nums[i] + nums[i + 2])){
          res++
      }
  }
  return res
}; 