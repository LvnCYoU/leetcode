/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  const sum = nums.reduce((a,b) => {
      if(a > 0) return 1 * b;
      else if(a == 0) return 0
      else return -1 * b
  });
  return sum > 0 ? 1 : sum == 0 ? 0 : -1
};