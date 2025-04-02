/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  let result = 0;
  for(let i = 0; i < nums.length - 1; i++){
      let left = Math.max(...nums.slice(0, i));
      let right = Math.max(...nums.slice(i + 1, nums.length));
      result = Math.max(result, (left - nums[i]) * right)
  }
  return result
};